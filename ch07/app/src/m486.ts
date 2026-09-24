import { f143, T143 } from './m143';
import { f348, T348 } from './m348';
import { f320, T320 } from './m320';
export interface T486 { id: number; ten: string; con: T486[]; the: Record<string, number> }
export type U486<K extends keyof T486> = { [P in K]: T486[P] extends number ? string : T486[P] };
export function f486(x: T486, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f486(c, 1);
  s += f143({ id: s, ten: 'a', con: [], the: {} } as T143);s += f348({ id: s, ten: 'a', con: [], the: {} } as T348);s += f320({ id: s, ten: 'a', con: [], the: {} } as T320);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g486 = <K extends keyof T486>(o: T486, k: K): U486<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U486<K>[K];
