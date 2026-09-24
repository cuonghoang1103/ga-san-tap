import { f431, T431 } from './m431';
import { f64, T64 } from './m064';
import { f310, T310 } from './m310';
export interface T507 { id: number; ten: string; con: T507[]; the: Record<string, number> }
export type U507<K extends keyof T507> = { [P in K]: T507[P] extends number ? string : T507[P] };
export function f507(x: T507, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f507(c, 1);
  s += f431({ id: s, ten: 'a', con: [], the: {} } as T431);s += f64({ id: s, ten: 'a', con: [], the: {} } as T64);s += f310({ id: s, ten: 'a', con: [], the: {} } as T310);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g507 = <K extends keyof T507>(o: T507, k: K): U507<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U507<K>[K];
