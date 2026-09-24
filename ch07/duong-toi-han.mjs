#!/usr/bin/env node
// Chương 7 · bài 7.1 — đọc ĐƯỜNG TỚI HẠN của một lần chạy từ API, không cần mở giao diện.
//   node ch07/duong-toi-han.mjs <run_id> [owner/repo]
// Cách tính (không cần đọc YAML): đi NGƯỢC từ job kết thúc cuối cùng; ở mỗi bước, job "chặn" nó là job
// kết thúc MUỘN NHẤT trước lúc nó được tạo ra (created_at) — với needs: thì job con chỉ được tạo khi job cha xong.
import { execFileSync } from 'node:child_process';
import { appendFileSync } from 'node:fs';

const [runId, repo = process.env.GITHUB_REPOSITORY] = process.argv.slice(2);
if (!runId || !repo) { console.error('dung: node duong-toi-han.mjs <run_id> [owner/repo]'); process.exit(2); }
const api = (p) => JSON.parse(execFileSync('gh', ['api', p], { encoding: 'utf8' }));
const run = api(`repos/${repo}/actions/runs/${runId}`);
const jobs = api(`repos/${repo}/actions/runs/${runId}/jobs?per_page=100`).jobs
  .filter((j) => j.started_at && j.completed_at && j.conclusion !== 'skipped')
  .map((j) => ({ ten: j.name, tao: Date.parse(j.created_at), bd: Date.parse(j.started_at), kt: Date.parse(j.completed_at) }));
if (!jobs.length) { console.error('chua co job nao xong'); process.exit(1); }
const s = (ms) => Math.round(ms / 1000);
const t0 = Math.min(...jobs.map((j) => j.tao));
const may = jobs.reduce((a, j) => a + (j.kt - j.bd), 0);
// Job nào đang chạy (chính job gọi script) thì chưa có completed_at — đã bị lọc; lấy job xong cuối cùng làm đích.
let cur = jobs.reduce((a, j) => (j.kt > a.kt ? j : a));
const chuoi = [cur];
for (;;) {
  const cha = jobs.filter((j) => j !== cur && j.kt <= cur.tao + 1500).sort((a, b) => b.kt - a.kt)[0];
  if (!cha) break;
  chuoi.unshift(cha); cur = cha;
}
const dongHo = Math.max(...jobs.map((j) => j.kt)) - t0;
const tren = new Set(chuoi);
const dongs = [];
dongs.push(`run ${runId} · ${run.name} · ${run.event} · ${run.head_sha.slice(0, 7)}`);
dongs.push('');
dongs.push('job'.padEnd(28) + 'cho may  chay   xong luc   ');
for (const j of [...jobs].sort((a, b) => a.bd - b.bd)) {
  const moc = new Date(j.kt).toISOString().slice(11, 19);
  dongs.push(`${j.ten.slice(0, 27).padEnd(28)}${String(s(j.bd - j.tao)).padStart(5)}s ${String(s(j.kt - j.bd)).padStart(5)}s   ${moc}   ${tren.has(j) ? '<- TREN duong toi han' : 'ngoai: cho ' + s(Math.max(...chuoi.filter(c=>c.bd>=j.kt).map(c=>c.bd), j.kt) - j.kt) + 's'}`);
}
dongs.push('');
dongs.push(`tong MAY-GIAY      ${s(may)} s`);
dongs.push(`DONG HO (job dau tao -> job cuoi xong)  ${s(dongHo)} s`);
dongs.push(`duong TOI HAN      ${chuoi.map((j) => s(j.kt - j.bd)).join(' + ')} = ${s(chuoi.reduce((a, j) => a + j.kt - j.bd, 0))} s  (${chuoi.map((j) => j.ten).join(' -> ')})`);
dongs.push(`phan con lai = cho runner + ban giao giua job: ${s(dongHo - chuoi.reduce((a, j) => a + j.kt - j.bd, 0))} s`);
const out = dongs.join('\n');
console.log(out);
if (process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY, '### Duong toi han\n```\n' + out + '\n```\n');
