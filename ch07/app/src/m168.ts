import { f22, T22 } from './m022';
import { f59, T59 } from './m059';
import { f124, T124 } from './m124';
export interface T168 { id: number; ten: string; con: T168[]; the: Record<string, number> }
export type U168<K extends keyof T168> = { [P in K]: T168[P] extends number ? string : T168[P] };
export function f168(x: T168, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f168(c, 1);
  s += f22({ id: s, ten: 'a', con: [], the: {} } as T22);s += f59({ id: s, ten: 'a', con: [], the: {} } as T59);s += f124({ id: s, ten: 'a', con: [], the: {} } as T124);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g168 = <K extends keyof T168>(o: T168, k: K): U168<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U168<K>[K];
