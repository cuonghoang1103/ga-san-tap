import { f100, T100 } from './m100';
import { f5, T5 } from './m005';
import { f105, T105 } from './m105';
export interface T110 { id: number; ten: string; con: T110[]; the: Record<string, number> }
export type U110<K extends keyof T110> = { [P in K]: T110[P] extends number ? string : T110[P] };
export function f110(x: T110, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f110(c, 1);
  s += f100({ id: s, ten: 'a', con: [], the: {} } as T100);s += f5({ id: s, ten: 'a', con: [], the: {} } as T5);s += f105({ id: s, ten: 'a', con: [], the: {} } as T105);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g110 = <K extends keyof T110>(o: T110, k: K): U110<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U110<K>[K];
