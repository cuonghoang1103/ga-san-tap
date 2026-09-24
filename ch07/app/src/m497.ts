import { f25, T25 } from './m025';
import { f185, T185 } from './m185';
import { f15, T15 } from './m015';
export interface T497 { id: number; ten: string; con: T497[]; the: Record<string, number> }
export type U497<K extends keyof T497> = { [P in K]: T497[P] extends number ? string : T497[P] };
export function f497(x: T497, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f497(c, 1);
  s += f25({ id: s, ten: 'a', con: [], the: {} } as T25);s += f185({ id: s, ten: 'a', con: [], the: {} } as T185);s += f15({ id: s, ten: 'a', con: [], the: {} } as T15);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g497 = <K extends keyof T497>(o: T497, k: K): U497<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U497<K>[K];
