import { f38, T38 } from './m038';
import { f0, T0 } from './m000';
import { f43, T43 } from './m043';
export interface T533 { id: number; ten: string; con: T533[]; the: Record<string, number> }
export type U533<K extends keyof T533> = { [P in K]: T533[P] extends number ? string : T533[P] };
export function f533(x: T533, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f533(c, 1);
  s += f38({ id: s, ten: 'a', con: [], the: {} } as T38);s += f0({ id: s, ten: 'a', con: [], the: {} } as T0);s += f43({ id: s, ten: 'a', con: [], the: {} } as T43);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g533 = <K extends keyof T533>(o: T533, k: K): U533<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U533<K>[K];
