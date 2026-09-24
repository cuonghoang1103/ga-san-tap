import { f81, T81 } from './m081';
import { f115, T115 } from './m115';
import { f100, T100 } from './m100';
export interface T128 { id: number; ten: string; con: T128[]; the: Record<string, number> }
export type U128<K extends keyof T128> = { [P in K]: T128[P] extends number ? string : T128[P] };
export function f128(x: T128, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f128(c, 1);
  s += f81({ id: s, ten: 'a', con: [], the: {} } as T81);s += f115({ id: s, ten: 'a', con: [], the: {} } as T115);s += f100({ id: s, ten: 'a', con: [], the: {} } as T100);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g128 = <K extends keyof T128>(o: T128, k: K): U128<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U128<K>[K];
