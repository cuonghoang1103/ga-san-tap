import { f46, T46 } from './m046';
import { f128, T128 } from './m128';
import { f166, T166 } from './m166';
export interface T327 { id: number; ten: string; con: T327[]; the: Record<string, number> }
export type U327<K extends keyof T327> = { [P in K]: T327[P] extends number ? string : T327[P] };
export function f327(x: T327, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f327(c, 1);
  s += f46({ id: s, ten: 'a', con: [], the: {} } as T46);s += f128({ id: s, ten: 'a', con: [], the: {} } as T128);s += f166({ id: s, ten: 'a', con: [], the: {} } as T166);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g327 = <K extends keyof T327>(o: T327, k: K): U327<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U327<K>[K];
