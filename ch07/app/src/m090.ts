import { f70, T70 } from './m070';
import { f44, T44 } from './m044';
import { f87, T87 } from './m087';
export interface T90 { id: number; ten: string; con: T90[]; the: Record<string, number> }
export type U90<K extends keyof T90> = { [P in K]: T90[P] extends number ? string : T90[P] };
export function f90(x: T90, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f90(c, 1);
  s += f70({ id: s, ten: 'a', con: [], the: {} } as T70);s += f44({ id: s, ten: 'a', con: [], the: {} } as T44);s += f87({ id: s, ten: 'a', con: [], the: {} } as T87);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g90 = <K extends keyof T90>(o: T90, k: K): U90<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U90<K>[K];
