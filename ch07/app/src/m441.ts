import { f85, T85 } from './m085';
import { f266, T266 } from './m266';
import { f131, T131 } from './m131';
export interface T441 { id: number; ten: string; con: T441[]; the: Record<string, number> }
export type U441<K extends keyof T441> = { [P in K]: T441[P] extends number ? string : T441[P] };
export function f441(x: T441, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f441(c, 1);
  s += f85({ id: s, ten: 'a', con: [], the: {} } as T85);s += f266({ id: s, ten: 'a', con: [], the: {} } as T266);s += f131({ id: s, ten: 'a', con: [], the: {} } as T131);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g441 = <K extends keyof T441>(o: T441, k: K): U441<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U441<K>[K];
