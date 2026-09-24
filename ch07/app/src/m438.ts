import { f310, T310 } from './m310';
import { f437, T437 } from './m437';
import { f245, T245 } from './m245';
export interface T438 { id: number; ten: string; con: T438[]; the: Record<string, number> }
export type U438<K extends keyof T438> = { [P in K]: T438[P] extends number ? string : T438[P] };
export function f438(x: T438, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f438(c, 1);
  s += f310({ id: s, ten: 'a', con: [], the: {} } as T310);s += f437({ id: s, ten: 'a', con: [], the: {} } as T437);s += f245({ id: s, ten: 'a', con: [], the: {} } as T245);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g438 = <K extends keyof T438>(o: T438, k: K): U438<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U438<K>[K];
