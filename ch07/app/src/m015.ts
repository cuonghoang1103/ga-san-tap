import { f3, T3 } from './m003';
import { f10, T10 } from './m010';
import { f14, T14 } from './m014';
export interface T15 { id: number; ten: string; con: T15[]; the: Record<string, number> }
export type U15<K extends keyof T15> = { [P in K]: T15[P] extends number ? string : T15[P] };
export function f15(x: T15, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f15(c, 1);
  s += f3({ id: s, ten: 'a', con: [], the: {} } as T3);s += f10({ id: s, ten: 'a', con: [], the: {} } as T10);s += f14({ id: s, ten: 'a', con: [], the: {} } as T14);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g15 = <K extends keyof T15>(o: T15, k: K): U15<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U15<K>[K];
