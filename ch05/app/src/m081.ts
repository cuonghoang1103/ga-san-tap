import { f55, T55 } from './m055';
import { f75, T75 } from './m075';
import { f24, T24 } from './m024';
export interface T81 { id: number; ten: string; con: T81[]; the: Record<string, number> }
export type U81<K extends keyof T81> = { [P in K]: T81[P] extends number ? string : T81[P] };
export function f81(x: T81, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f81(c, 1);
  s += f55({ id: s, ten: 'a', con: [], the: {} } as T55);s += f75({ id: s, ten: 'a', con: [], the: {} } as T75);s += f24({ id: s, ten: 'a', con: [], the: {} } as T24);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g81 = <K extends keyof T81>(o: T81, k: K): U81<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U81<K>[K];
