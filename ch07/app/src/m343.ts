import { f294, T294 } from './m294';
import { f33, T33 } from './m033';
import { f22, T22 } from './m022';
export interface T343 { id: number; ten: string; con: T343[]; the: Record<string, number> }
export type U343<K extends keyof T343> = { [P in K]: T343[P] extends number ? string : T343[P] };
export function f343(x: T343, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f343(c, 1);
  s += f294({ id: s, ten: 'a', con: [], the: {} } as T294);s += f33({ id: s, ten: 'a', con: [], the: {} } as T33);s += f22({ id: s, ten: 'a', con: [], the: {} } as T22);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g343 = <K extends keyof T343>(o: T343, k: K): U343<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U343<K>[K];
