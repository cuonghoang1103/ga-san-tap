// Điểm vào của action. ncc gom file này + @actions/* thành MỘT dist/index.js.
import * as core from '@actions/core';
import * as github from '@actions/github';
import { demTep } from './dem.js';

async function chay() {
  const thuMuc = core.getInput('thu-muc');
  const token = core.getInput('token', { required: true });

  core.startGroup(`Dem tep trong ${thuMuc}`);
  const { tong, xep, nhieuNhat } = demTep(thuMuc);
  for (const [duoi, n] of xep) core.info(`${duoi.padEnd(14)} ${n}`);
  core.endGroup();

  core.setOutput('tong', tong);
  core.setOutput('nhieu-nhat', nhieuNhat);
  if (tong > 40) core.warning(`Thu muc ${thuMuc} co ${tong} tep — nhieu hon nguong 40`, { title: 'ch12-dem-tep' });

  const octokit = github.getOctokit(token);
  const { owner, repo } = github.context.repo;
  const { data } = await octokit.rest.repos.get({ owner, repo });
  core.info(`repo ${data.full_name} · nhanh mac dinh ${data.default_branch} · public=${!data.private}`);
  core.info(`context: event=${github.context.eventName} sha=${github.context.sha.slice(0, 7)} actor=${github.context.actor}`);
  core.info(`Node dang chay action: ${process.version} (${process.execPath})`);

  await core.summary
    .addHeading('ch12-dem-tep', 3)
    .addTable([[{ data: 'Duoi', header: true }, { data: 'So tep', header: true }], ...xep.slice(0, 6).map(([d, n]) => [d, String(n)])])
    .addRaw(`Tong: ${tong}`)
    .write();
}

chay().catch((e) => core.setFailed(e.message));
