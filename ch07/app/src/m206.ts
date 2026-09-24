import { f7, T7 } from './m007';
import { f160, T160 } from './m160';
import { f155, T155 } from './m155';
export interface T206 { id: number; ten: string; con: T206[]; the: Record<string, number> }
export type U206<K extends keyof T206> = { [P in K]: T206[P] extends number ? string : T206[P] };
export function f206(x: T206, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f206(c, 1);
  s += f7({ id: s, ten: 'a', con: [], the: {} } as T7);s += f160({ id: s, ten: 'a', con: [], the: {} } as T160);s += f155({ id: s, ten: 'a', con: [], the: {} } as T155);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g206 = <K extends keyof T206>(o: T206, k: K): U206<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U206<K>[K];
