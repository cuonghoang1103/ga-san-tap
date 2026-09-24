import { f0, T0 } from './m000';
import { f1, T1 } from './m001';
export interface T2 { id: number; ten: string; con: T2[]; the: Record<string, number> }
export type U2<K extends keyof T2> = { [P in K]: T2[P] extends number ? string : T2[P] };
export function f2(x: T2, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f2(c, 1);
  s += f0({ id: s, ten: 'a', con: [], the: {} } as T0);s += f1({ id: s, ten: 'a', con: [], the: {} } as T1);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g2 = <K extends keyof T2>(o: T2, k: K): U2<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U2<K>[K];
