import { f14, T14 } from './m014';
import { f40, T40 } from './m040';
import { f11, T11 } from './m011';
export interface T47 { id: number; ten: string; con: T47[]; the: Record<string, number> }
export type U47<K extends keyof T47> = { [P in K]: T47[P] extends number ? string : T47[P] };
export function f47(x: T47, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f47(c, 1);
  s += f14({ id: s, ten: 'a', con: [], the: {} } as T14);s += f40({ id: s, ten: 'a', con: [], the: {} } as T40);s += f11({ id: s, ten: 'a', con: [], the: {} } as T11);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g47 = <K extends keyof T47>(o: T47, k: K): U47<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U47<K>[K];
