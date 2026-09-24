import { f37, T37 } from './m037';
import { f64, T64 } from './m064';
import { f63, T63 } from './m063';
export interface T83 { id: number; ten: string; con: T83[]; the: Record<string, number> }
export type U83<K extends keyof T83> = { [P in K]: T83[P] extends number ? string : T83[P] };
export function f83(x: T83, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f83(c, 1);
  s += f37({ id: s, ten: 'a', con: [], the: {} } as T37);s += f64({ id: s, ten: 'a', con: [], the: {} } as T64);s += f63({ id: s, ten: 'a', con: [], the: {} } as T63);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g83 = <K extends keyof T83>(o: T83, k: K): U83<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U83<K>[K];
