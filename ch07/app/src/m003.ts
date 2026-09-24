import { f0, T0 } from './m000';
import { f1, T1 } from './m001';
import { f2, T2 } from './m002';
export interface T3 { id: number; ten: string; con: T3[]; the: Record<string, number> }
export type U3<K extends keyof T3> = { [P in K]: T3[P] extends number ? string : T3[P] };
export function f3(x: T3, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f3(c, 1);
  s += f0({ id: s, ten: 'a', con: [], the: {} } as T0);s += f1({ id: s, ten: 'a', con: [], the: {} } as T1);s += f2({ id: s, ten: 'a', con: [], the: {} } as T2);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g3 = <K extends keyof T3>(o: T3, k: K): U3<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U3<K>[K];
