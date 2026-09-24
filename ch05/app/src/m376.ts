import { f187, T187 } from './m187';
import { f278, T278 } from './m278';
import { f96, T96 } from './m096';
export interface T376 { id: number; ten: string; con: T376[]; the: Record<string, number> }
export type U376<K extends keyof T376> = { [P in K]: T376[P] extends number ? string : T376[P] };
export function f376(x: T376, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f376(c, 1);
  s += f187({ id: s, ten: 'a', con: [], the: {} } as T187);s += f278({ id: s, ten: 'a', con: [], the: {} } as T278);s += f96({ id: s, ten: 'a', con: [], the: {} } as T96);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g376 = <K extends keyof T376>(o: T376, k: K): U376<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U376<K>[K];
