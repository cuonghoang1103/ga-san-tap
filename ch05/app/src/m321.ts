import { f46, T46 } from './m046';
import { f262, T262 } from './m262';
import { f240, T240 } from './m240';
export interface T321 { id: number; ten: string; con: T321[]; the: Record<string, number> }
export type U321<K extends keyof T321> = { [P in K]: T321[P] extends number ? string : T321[P] };
export function f321(x: T321, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f321(c, 1);
  s += f46({ id: s, ten: 'a', con: [], the: {} } as T46);s += f262({ id: s, ten: 'a', con: [], the: {} } as T262);s += f240({ id: s, ten: 'a', con: [], the: {} } as T240);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g321 = <K extends keyof T321>(o: T321, k: K): U321<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U321<K>[K];
