import { f25, T25 } from './m025';
import { f86, T86 } from './m086';
import { f152, T152 } from './m152';
export interface T268 { id: number; ten: string; con: T268[]; the: Record<string, number> }
export type U268<K extends keyof T268> = { [P in K]: T268[P] extends number ? string : T268[P] };
export function f268(x: T268, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f268(c, 1);
  s += f25({ id: s, ten: 'a', con: [], the: {} } as T25);s += f86({ id: s, ten: 'a', con: [], the: {} } as T86);s += f152({ id: s, ten: 'a', con: [], the: {} } as T152);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g268 = <K extends keyof T268>(o: T268, k: K): U268<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U268<K>[K];
