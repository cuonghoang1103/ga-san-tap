import { f27, T27 } from './m027';
import { f3, T3 } from './m003';
import { f30, T30 } from './m030';
export interface T40 { id: number; ten: string; con: T40[]; the: Record<string, number> }
export type U40<K extends keyof T40> = { [P in K]: T40[P] extends number ? string : T40[P] };
export function f40(x: T40, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f40(c, 1);
  s += f27({ id: s, ten: 'a', con: [], the: {} } as T27);s += f3({ id: s, ten: 'a', con: [], the: {} } as T3);s += f30({ id: s, ten: 'a', con: [], the: {} } as T30);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g40 = <K extends keyof T40>(o: T40, k: K): U40<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U40<K>[K];
