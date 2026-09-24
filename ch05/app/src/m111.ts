import { f37, T37 } from './m037';
import { f1, T1 } from './m001';
import { f78, T78 } from './m078';
export interface T111 { id: number; ten: string; con: T111[]; the: Record<string, number> }
export type U111<K extends keyof T111> = { [P in K]: T111[P] extends number ? string : T111[P] };
export function f111(x: T111, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f111(c, 1);
  s += f37({ id: s, ten: 'a', con: [], the: {} } as T37);s += f1({ id: s, ten: 'a', con: [], the: {} } as T1);s += f78({ id: s, ten: 'a', con: [], the: {} } as T78);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g111 = <K extends keyof T111>(o: T111, k: K): U111<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U111<K>[K];
