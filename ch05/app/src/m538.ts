import { f41, T41 } from './m041';
import { f321, T321 } from './m321';
import { f432, T432 } from './m432';
export interface T538 { id: number; ten: string; con: T538[]; the: Record<string, number> }
export type U538<K extends keyof T538> = { [P in K]: T538[P] extends number ? string : T538[P] };
export function f538(x: T538, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f538(c, 1);
  s += f41({ id: s, ten: 'a', con: [], the: {} } as T41);s += f321({ id: s, ten: 'a', con: [], the: {} } as T321);s += f432({ id: s, ten: 'a', con: [], the: {} } as T432);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g538 = <K extends keyof T538>(o: T538, k: K): U538<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U538<K>[K];
