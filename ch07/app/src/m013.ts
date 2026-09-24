import { f3, T3 } from './m003';
import { f7, T7 } from './m007';
import { f11, T11 } from './m011';
export interface T13 { id: number; ten: string; con: T13[]; the: Record<string, number> }
export type U13<K extends keyof T13> = { [P in K]: T13[P] extends number ? string : T13[P] };
export function f13(x: T13, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f13(c, 1);
  s += f3({ id: s, ten: 'a', con: [], the: {} } as T3);s += f7({ id: s, ten: 'a', con: [], the: {} } as T7);s += f11({ id: s, ten: 'a', con: [], the: {} } as T11);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g13 = <K extends keyof T13>(o: T13, k: K): U13<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U13<K>[K];
