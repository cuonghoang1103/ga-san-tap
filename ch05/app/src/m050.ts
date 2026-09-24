import { f2, T2 } from './m002';
import { f43, T43 } from './m043';
import { f4, T4 } from './m004';
export interface T50 { id: number; ten: string; con: T50[]; the: Record<string, number> }
export type U50<K extends keyof T50> = { [P in K]: T50[P] extends number ? string : T50[P] };
export function f50(x: T50, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f50(c, 1);
  s += f2({ id: s, ten: 'a', con: [], the: {} } as T2);s += f43({ id: s, ten: 'a', con: [], the: {} } as T43);s += f4({ id: s, ten: 'a', con: [], the: {} } as T4);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g50 = <K extends keyof T50>(o: T50, k: K): U50<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U50<K>[K];
