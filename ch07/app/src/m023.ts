import { f15, T15 } from './m015';
import { f7, T7 } from './m007';
import { f12, T12 } from './m012';
export interface T23 { id: number; ten: string; con: T23[]; the: Record<string, number> }
export type U23<K extends keyof T23> = { [P in K]: T23[P] extends number ? string : T23[P] };
export function f23(x: T23, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f23(c, 1);
  s += f15({ id: s, ten: 'a', con: [], the: {} } as T15);s += f7({ id: s, ten: 'a', con: [], the: {} } as T7);s += f12({ id: s, ten: 'a', con: [], the: {} } as T12);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g23 = <K extends keyof T23>(o: T23, k: K): U23<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U23<K>[K];
