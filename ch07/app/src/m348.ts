import { f4, T4 } from './m004';
import { f269, T269 } from './m269';
import { f62, T62 } from './m062';
export interface T348 { id: number; ten: string; con: T348[]; the: Record<string, number> }
export type U348<K extends keyof T348> = { [P in K]: T348[P] extends number ? string : T348[P] };
export function f348(x: T348, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f348(c, 1);
  s += f4({ id: s, ten: 'a', con: [], the: {} } as T4);s += f269({ id: s, ten: 'a', con: [], the: {} } as T269);s += f62({ id: s, ten: 'a', con: [], the: {} } as T62);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g348 = <K extends keyof T348>(o: T348, k: K): U348<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U348<K>[K];
