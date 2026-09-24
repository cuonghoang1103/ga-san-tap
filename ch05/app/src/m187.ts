import { f126, T126 } from './m126';
import { f174, T174 } from './m174';
import { f100, T100 } from './m100';
export interface T187 { id: number; ten: string; con: T187[]; the: Record<string, number> }
export type U187<K extends keyof T187> = { [P in K]: T187[P] extends number ? string : T187[P] };
export function f187(x: T187, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f187(c, 1);
  s += f126({ id: s, ten: 'a', con: [], the: {} } as T126);s += f174({ id: s, ten: 'a', con: [], the: {} } as T174);s += f100({ id: s, ten: 'a', con: [], the: {} } as T100);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g187 = <K extends keyof T187>(o: T187, k: K): U187<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U187<K>[K];
