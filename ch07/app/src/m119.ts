import { f95, T95 } from './m095';
import { f108, T108 } from './m108';
import { f13, T13 } from './m013';
export interface T119 { id: number; ten: string; con: T119[]; the: Record<string, number> }
export type U119<K extends keyof T119> = { [P in K]: T119[P] extends number ? string : T119[P] };
export function f119(x: T119, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f119(c, 1);
  s += f95({ id: s, ten: 'a', con: [], the: {} } as T95);s += f108({ id: s, ten: 'a', con: [], the: {} } as T108);s += f13({ id: s, ten: 'a', con: [], the: {} } as T13);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g119 = <K extends keyof T119>(o: T119, k: K): U119<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U119<K>[K];
