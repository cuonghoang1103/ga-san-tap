import { f51, T51 } from './m051';
import { f95, T95 } from './m095';
import { f23, T23 } from './m023';
export interface T283 { id: number; ten: string; con: T283[]; the: Record<string, number> }
export type U283<K extends keyof T283> = { [P in K]: T283[P] extends number ? string : T283[P] };
export function f283(x: T283, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f283(c, 1);
  s += f51({ id: s, ten: 'a', con: [], the: {} } as T51);s += f95({ id: s, ten: 'a', con: [], the: {} } as T95);s += f23({ id: s, ten: 'a', con: [], the: {} } as T23);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g283 = <K extends keyof T283>(o: T283, k: K): U283<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U283<K>[K];
