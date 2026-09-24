import { f4, T4 } from './m004';
import { f0, T0 } from './m000';
import { f3, T3 } from './m003';
export interface T7 { id: number; ten: string; con: T7[]; the: Record<string, number> }
export type U7<K extends keyof T7> = { [P in K]: T7[P] extends number ? string : T7[P] };
export function f7(x: T7, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f7(c, 1);
  s += f4({ id: s, ten: 'a', con: [], the: {} } as T4);s += f0({ id: s, ten: 'a', con: [], the: {} } as T0);s += f3({ id: s, ten: 'a', con: [], the: {} } as T3);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g7 = <K extends keyof T7>(o: T7, k: K): U7<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U7<K>[K];
