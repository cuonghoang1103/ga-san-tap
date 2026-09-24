import { f160, T160 } from './m160';
import { f20, T20 } from './m020';
import { f64, T64 } from './m064';
export interface T323 { id: number; ten: string; con: T323[]; the: Record<string, number> }
export type U323<K extends keyof T323> = { [P in K]: T323[P] extends number ? string : T323[P] };
export function f323(x: T323, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f323(c, 1);
  s += f160({ id: s, ten: 'a', con: [], the: {} } as T160);s += f20({ id: s, ten: 'a', con: [], the: {} } as T20);s += f64({ id: s, ten: 'a', con: [], the: {} } as T64);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g323 = <K extends keyof T323>(o: T323, k: K): U323<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U323<K>[K];
