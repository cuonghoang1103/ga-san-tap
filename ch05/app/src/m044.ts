import { f22, T22 } from './m022';
import { f0, T0 } from './m000';
import { f34, T34 } from './m034';
export interface T44 { id: number; ten: string; con: T44[]; the: Record<string, number> }
export type U44<K extends keyof T44> = { [P in K]: T44[P] extends number ? string : T44[P] };
export function f44(x: T44, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f44(c, 1);
  s += f22({ id: s, ten: 'a', con: [], the: {} } as T22);s += f0({ id: s, ten: 'a', con: [], the: {} } as T0);s += f34({ id: s, ten: 'a', con: [], the: {} } as T34);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g44 = <K extends keyof T44>(o: T44, k: K): U44<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U44<K>[K];
