import { f1, T1 } from './m001';
import { f0, T0 } from './m000';
import { f4, T4 } from './m004';
export interface T5 { id: number; ten: string; con: T5[]; the: Record<string, number> }
export type U5<K extends keyof T5> = { [P in K]: T5[P] extends number ? string : T5[P] };
export function f5(x: T5, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f5(c, 1);
  s += f1({ id: s, ten: 'a', con: [], the: {} } as T1);s += f0({ id: s, ten: 'a', con: [], the: {} } as T0);s += f4({ id: s, ten: 'a', con: [], the: {} } as T4);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g5 = <K extends keyof T5>(o: T5, k: K): U5<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U5<K>[K];
