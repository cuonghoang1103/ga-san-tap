import { f100, T100 } from './m100';
import { f18, T18 } from './m018';
import { f16, T16 } from './m016';
export interface T102 { id: number; ten: string; con: T102[]; the: Record<string, number> }
export type U102<K extends keyof T102> = { [P in K]: T102[P] extends number ? string : T102[P] };
export function f102(x: T102, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f102(c, 1);
  s += f100({ id: s, ten: 'a', con: [], the: {} } as T100);s += f18({ id: s, ten: 'a', con: [], the: {} } as T18);s += f16({ id: s, ten: 'a', con: [], the: {} } as T16);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g102 = <K extends keyof T102>(o: T102, k: K): U102<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U102<K>[K];
