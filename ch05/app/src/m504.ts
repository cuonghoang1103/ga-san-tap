import { f490, T490 } from './m490';
import { f485, T485 } from './m485';
import { f57, T57 } from './m057';
export interface T504 { id: number; ten: string; con: T504[]; the: Record<string, number> }
export type U504<K extends keyof T504> = { [P in K]: T504[P] extends number ? string : T504[P] };
export function f504(x: T504, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f504(c, 1);
  s += f490({ id: s, ten: 'a', con: [], the: {} } as T490);s += f485({ id: s, ten: 'a', con: [], the: {} } as T485);s += f57({ id: s, ten: 'a', con: [], the: {} } as T57);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g504 = <K extends keyof T504>(o: T504, k: K): U504<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U504<K>[K];
