import { f12, T12 } from './m012';
import { f63, T63 } from './m063';
import { f64, T64 } from './m064';
export interface T156 { id: number; ten: string; con: T156[]; the: Record<string, number> }
export type U156<K extends keyof T156> = { [P in K]: T156[P] extends number ? string : T156[P] };
export function f156(x: T156, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f156(c, 1);
  s += f12({ id: s, ten: 'a', con: [], the: {} } as T12);s += f63({ id: s, ten: 'a', con: [], the: {} } as T63);s += f64({ id: s, ten: 'a', con: [], the: {} } as T64);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g156 = <K extends keyof T156>(o: T156, k: K): U156<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U156<K>[K];
