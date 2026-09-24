import { f29, T29 } from './m029';
import { f44, T44 } from './m044';
import { f20, T20 } from './m020';
export interface T59 { id: number; ten: string; con: T59[]; the: Record<string, number> }
export type U59<K extends keyof T59> = { [P in K]: T59[P] extends number ? string : T59[P] };
export function f59(x: T59, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f59(c, 1);
  s += f29({ id: s, ten: 'a', con: [], the: {} } as T29);s += f44({ id: s, ten: 'a', con: [], the: {} } as T44);s += f20({ id: s, ten: 'a', con: [], the: {} } as T20);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g59 = <K extends keyof T59>(o: T59, k: K): U59<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U59<K>[K];
