import { f72, T72 } from './m072';
import { f17, T17 } from './m017';
import { f43, T43 } from './m043';
export interface T87 { id: number; ten: string; con: T87[]; the: Record<string, number> }
export type U87<K extends keyof T87> = { [P in K]: T87[P] extends number ? string : T87[P] };
export function f87(x: T87, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f87(c, 1);
  s += f72({ id: s, ten: 'a', con: [], the: {} } as T72);s += f17({ id: s, ten: 'a', con: [], the: {} } as T17);s += f43({ id: s, ten: 'a', con: [], the: {} } as T43);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g87 = <K extends keyof T87>(o: T87, k: K): U87<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U87<K>[K];
