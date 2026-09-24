import { f34, T34 } from './m034';
import { f46, T46 } from './m046';
import { f37, T37 } from './m037';
export interface T107 { id: number; ten: string; con: T107[]; the: Record<string, number> }
export type U107<K extends keyof T107> = { [P in K]: T107[P] extends number ? string : T107[P] };
export function f107(x: T107, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f107(c, 1);
  s += f34({ id: s, ten: 'a', con: [], the: {} } as T34);s += f46({ id: s, ten: 'a', con: [], the: {} } as T46);s += f37({ id: s, ten: 'a', con: [], the: {} } as T37);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g107 = <K extends keyof T107>(o: T107, k: K): U107<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U107<K>[K];
