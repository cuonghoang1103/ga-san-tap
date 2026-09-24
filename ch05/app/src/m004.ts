import { f3, T3 } from './m003';
import { f2, T2 } from './m002';
import { f1, T1 } from './m001';
export interface T4 { id: number; ten: string; con: T4[]; the: Record<string, number> }
export type U4<K extends keyof T4> = { [P in K]: T4[P] extends number ? string : T4[P] };
export function f4(x: T4, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f4(c, 1);
  s += f3({ id: s, ten: 'a', con: [], the: {} } as T3);s += f2({ id: s, ten: 'a', con: [], the: {} } as T2);s += f1({ id: s, ten: 'a', con: [], the: {} } as T1);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g4 = <K extends keyof T4>(o: T4, k: K): U4<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U4<K>[K];
