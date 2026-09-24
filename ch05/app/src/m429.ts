import { f343, T343 } from './m343';
import { f379, T379 } from './m379';
import { f60, T60 } from './m060';
export interface T429 { id: number; ten: string; con: T429[]; the: Record<string, number> }
export type U429<K extends keyof T429> = { [P in K]: T429[P] extends number ? string : T429[P] };
export function f429(x: T429, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f429(c, 1);
  s += f343({ id: s, ten: 'a', con: [], the: {} } as T343);s += f379({ id: s, ten: 'a', con: [], the: {} } as T379);s += f60({ id: s, ten: 'a', con: [], the: {} } as T60);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g429 = <K extends keyof T429>(o: T429, k: K): U429<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U429<K>[K];
