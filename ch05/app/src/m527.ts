import { f302, T302 } from './m302';
import { f8, T8 } from './m008';
import { f9, T9 } from './m009';
export interface T527 { id: number; ten: string; con: T527[]; the: Record<string, number> }
export type U527<K extends keyof T527> = { [P in K]: T527[P] extends number ? string : T527[P] };
export function f527(x: T527, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f527(c, 1);
  s += f302({ id: s, ten: 'a', con: [], the: {} } as T302);s += f8({ id: s, ten: 'a', con: [], the: {} } as T8);s += f9({ id: s, ten: 'a', con: [], the: {} } as T9);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g527 = <K extends keyof T527>(o: T527, k: K): U527<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U527<K>[K];
