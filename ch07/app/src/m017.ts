import { f13, T13 } from './m013';
import { f3, T3 } from './m003';
import { f2, T2 } from './m002';
export interface T17 { id: number; ten: string; con: T17[]; the: Record<string, number> }
export type U17<K extends keyof T17> = { [P in K]: T17[P] extends number ? string : T17[P] };
export function f17(x: T17, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f17(c, 1);
  s += f13({ id: s, ten: 'a', con: [], the: {} } as T13);s += f3({ id: s, ten: 'a', con: [], the: {} } as T3);s += f2({ id: s, ten: 'a', con: [], the: {} } as T2);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g17 = <K extends keyof T17>(o: T17, k: K): U17<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U17<K>[K];
