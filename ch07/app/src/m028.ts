import { f21, T21 } from './m021';
import { f16, T16 } from './m016';
import { f3, T3 } from './m003';
export interface T28 { id: number; ten: string; con: T28[]; the: Record<string, number> }
export type U28<K extends keyof T28> = { [P in K]: T28[P] extends number ? string : T28[P] };
export function f28(x: T28, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f28(c, 1);
  s += f21({ id: s, ten: 'a', con: [], the: {} } as T21);s += f16({ id: s, ten: 'a', con: [], the: {} } as T16);s += f3({ id: s, ten: 'a', con: [], the: {} } as T3);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g28 = <K extends keyof T28>(o: T28, k: K): U28<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U28<K>[K];
