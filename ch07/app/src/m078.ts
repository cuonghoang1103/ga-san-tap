import { f21, T21 } from './m021';
import { f65, T65 } from './m065';
import { f4, T4 } from './m004';
export interface T78 { id: number; ten: string; con: T78[]; the: Record<string, number> }
export type U78<K extends keyof T78> = { [P in K]: T78[P] extends number ? string : T78[P] };
export function f78(x: T78, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f78(c, 1);
  s += f21({ id: s, ten: 'a', con: [], the: {} } as T21);s += f65({ id: s, ten: 'a', con: [], the: {} } as T65);s += f4({ id: s, ten: 'a', con: [], the: {} } as T4);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g78 = <K extends keyof T78>(o: T78, k: K): U78<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U78<K>[K];
