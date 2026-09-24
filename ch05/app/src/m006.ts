import { f0, T0 } from './m000';
import { f3, T3 } from './m003';
import { f4, T4 } from './m004';
export interface T6 { id: number; ten: string; con: T6[]; the: Record<string, number> }
export type U6<K extends keyof T6> = { [P in K]: T6[P] extends number ? string : T6[P] };
export function f6(x: T6, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f6(c, 1);
  s += f0({ id: s, ten: 'a', con: [], the: {} } as T0);s += f3({ id: s, ten: 'a', con: [], the: {} } as T3);s += f4({ id: s, ten: 'a', con: [], the: {} } as T4);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g6 = <K extends keyof T6>(o: T6, k: K): U6<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U6<K>[K];
