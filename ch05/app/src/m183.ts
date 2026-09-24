import { f155, T155 } from './m155';
import { f131, T131 } from './m131';
import { f146, T146 } from './m146';
export interface T183 { id: number; ten: string; con: T183[]; the: Record<string, number> }
export type U183<K extends keyof T183> = { [P in K]: T183[P] extends number ? string : T183[P] };
export function f183(x: T183, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f183(c, 1);
  s += f155({ id: s, ten: 'a', con: [], the: {} } as T155);s += f131({ id: s, ten: 'a', con: [], the: {} } as T131);s += f146({ id: s, ten: 'a', con: [], the: {} } as T146);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g183 = <K extends keyof T183>(o: T183, k: K): U183<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U183<K>[K];
