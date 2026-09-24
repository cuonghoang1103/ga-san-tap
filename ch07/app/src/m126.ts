import { f3, T3 } from './m003';
import { f1, T1 } from './m001';
import { f100, T100 } from './m100';
export interface T126 { id: number; ten: string; con: T126[]; the: Record<string, number> }
export type U126<K extends keyof T126> = { [P in K]: T126[P] extends number ? string : T126[P] };
export function f126(x: T126, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f126(c, 1);
  s += f3({ id: s, ten: 'a', con: [], the: {} } as T3);s += f1({ id: s, ten: 'a', con: [], the: {} } as T1);s += f100({ id: s, ten: 'a', con: [], the: {} } as T100);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g126 = <K extends keyof T126>(o: T126, k: K): U126<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U126<K>[K];
