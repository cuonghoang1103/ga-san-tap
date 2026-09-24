import { f166, T166 } from './m166';
import { f74, T74 } from './m074';
import { f161, T161 } from './m161';
export interface T249 { id: number; ten: string; con: T249[]; the: Record<string, number> }
export type U249<K extends keyof T249> = { [P in K]: T249[P] extends number ? string : T249[P] };
export function f249(x: T249, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f249(c, 1);
  s += f166({ id: s, ten: 'a', con: [], the: {} } as T166);s += f74({ id: s, ten: 'a', con: [], the: {} } as T74);s += f161({ id: s, ten: 'a', con: [], the: {} } as T161);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g249 = <K extends keyof T249>(o: T249, k: K): U249<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U249<K>[K];
