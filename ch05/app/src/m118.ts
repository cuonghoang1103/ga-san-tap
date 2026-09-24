import { f87, T87 } from './m087';
import { f30, T30 } from './m030';
import { f20, T20 } from './m020';
export interface T118 { id: number; ten: string; con: T118[]; the: Record<string, number> }
export type U118<K extends keyof T118> = { [P in K]: T118[P] extends number ? string : T118[P] };
export function f118(x: T118, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f118(c, 1);
  s += f87({ id: s, ten: 'a', con: [], the: {} } as T87);s += f30({ id: s, ten: 'a', con: [], the: {} } as T30);s += f20({ id: s, ten: 'a', con: [], the: {} } as T20);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g118 = <K extends keyof T118>(o: T118, k: K): U118<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U118<K>[K];
