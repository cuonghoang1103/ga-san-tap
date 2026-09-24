import { f0, T0 } from './m000';
export interface T1 { id: number; ten: string; con: T1[]; the: Record<string, number> }
export type U1<K extends keyof T1> = { [P in K]: T1[P] extends number ? string : T1[P] };
export function f1(x: T1, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f1(c, 1);
  s += f0({ id: s, ten: 'a', con: [], the: {} } as T0);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g1 = <K extends keyof T1>(o: T1, k: K): U1<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U1<K>[K];
