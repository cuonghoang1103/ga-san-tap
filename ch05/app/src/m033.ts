import { f25, T25 } from './m025';
import { f10, T10 } from './m010';
import { f32, T32 } from './m032';
export interface T33 { id: number; ten: string; con: T33[]; the: Record<string, number> }
export type U33<K extends keyof T33> = { [P in K]: T33[P] extends number ? string : T33[P] };
export function f33(x: T33, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f33(c, 1);
  s += f25({ id: s, ten: 'a', con: [], the: {} } as T25);s += f10({ id: s, ten: 'a', con: [], the: {} } as T10);s += f32({ id: s, ten: 'a', con: [], the: {} } as T32);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g33 = <K extends keyof T33>(o: T33, k: K): U33<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U33<K>[K];
