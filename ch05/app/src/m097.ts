import { f37, T37 } from './m037';
import { f30, T30 } from './m030';
import { f77, T77 } from './m077';
export interface T97 { id: number; ten: string; con: T97[]; the: Record<string, number> }
export type U97<K extends keyof T97> = { [P in K]: T97[P] extends number ? string : T97[P] };
export function f97(x: T97, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f97(c, 1);
  s += f37({ id: s, ten: 'a', con: [], the: {} } as T37);s += f30({ id: s, ten: 'a', con: [], the: {} } as T30);s += f77({ id: s, ten: 'a', con: [], the: {} } as T77);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g97 = <K extends keyof T97>(o: T97, k: K): U97<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U97<K>[K];
