import { f81, T81 } from './m081';
import { f128, T128 } from './m128';
import { f166, T166 } from './m166';
export interface T170 { id: number; ten: string; con: T170[]; the: Record<string, number> }
export type U170<K extends keyof T170> = { [P in K]: T170[P] extends number ? string : T170[P] };
export function f170(x: T170, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f170(c, 1);
  s += f81({ id: s, ten: 'a', con: [], the: {} } as T81);s += f128({ id: s, ten: 'a', con: [], the: {} } as T128);s += f166({ id: s, ten: 'a', con: [], the: {} } as T166);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g170 = <K extends keyof T170>(o: T170, k: K): U170<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U170<K>[K];
