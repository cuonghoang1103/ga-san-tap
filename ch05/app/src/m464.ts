import { f173, T173 } from './m173';
import { f90, T90 } from './m090';
import { f310, T310 } from './m310';
export interface T464 { id: number; ten: string; con: T464[]; the: Record<string, number> }
export type U464<K extends keyof T464> = { [P in K]: T464[P] extends number ? string : T464[P] };
export function f464(x: T464, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f464(c, 1);
  s += f173({ id: s, ten: 'a', con: [], the: {} } as T173);s += f90({ id: s, ten: 'a', con: [], the: {} } as T90);s += f310({ id: s, ten: 'a', con: [], the: {} } as T310);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g464 = <K extends keyof T464>(o: T464, k: K): U464<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U464<K>[K];
