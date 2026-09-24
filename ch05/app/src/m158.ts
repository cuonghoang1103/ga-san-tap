import { f140, T140 } from './m140';
import { f64, T64 } from './m064';
import { f138, T138 } from './m138';
export interface T158 { id: number; ten: string; con: T158[]; the: Record<string, number> }
export type U158<K extends keyof T158> = { [P in K]: T158[P] extends number ? string : T158[P] };
export function f158(x: T158, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f158(c, 1);
  s += f140({ id: s, ten: 'a', con: [], the: {} } as T140);s += f64({ id: s, ten: 'a', con: [], the: {} } as T64);s += f138({ id: s, ten: 'a', con: [], the: {} } as T138);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g158 = <K extends keyof T158>(o: T158, k: K): U158<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U158<K>[K];
