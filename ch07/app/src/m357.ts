import { f185, T185 } from './m185';
import { f329, T329 } from './m329';
import { f189, T189 } from './m189';
export interface T357 { id: number; ten: string; con: T357[]; the: Record<string, number> }
export type U357<K extends keyof T357> = { [P in K]: T357[P] extends number ? string : T357[P] };
export function f357(x: T357, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f357(c, 1);
  s += f185({ id: s, ten: 'a', con: [], the: {} } as T185);s += f329({ id: s, ten: 'a', con: [], the: {} } as T329);s += f189({ id: s, ten: 'a', con: [], the: {} } as T189);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g357 = <K extends keyof T357>(o: T357, k: K): U357<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U357<K>[K];
