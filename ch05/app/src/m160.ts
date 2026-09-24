import { f2, T2 } from './m002';
import { f101, T101 } from './m101';
import { f86, T86 } from './m086';
export interface T160 { id: number; ten: string; con: T160[]; the: Record<string, number> }
export type U160<K extends keyof T160> = { [P in K]: T160[P] extends number ? string : T160[P] };
export function f160(x: T160, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f160(c, 1);
  s += f2({ id: s, ten: 'a', con: [], the: {} } as T2);s += f101({ id: s, ten: 'a', con: [], the: {} } as T101);s += f86({ id: s, ten: 'a', con: [], the: {} } as T86);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g160 = <K extends keyof T160>(o: T160, k: K): U160<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U160<K>[K];
