import { f10, T10 } from './m010';
import { f16, T16 } from './m016';
import { f33, T33 } from './m033';
export interface T56 { id: number; ten: string; con: T56[]; the: Record<string, number> }
export type U56<K extends keyof T56> = { [P in K]: T56[P] extends number ? string : T56[P] };
export function f56(x: T56, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f56(c, 1);
  s += f10({ id: s, ten: 'a', con: [], the: {} } as T10);s += f16({ id: s, ten: 'a', con: [], the: {} } as T16);s += f33({ id: s, ten: 'a', con: [], the: {} } as T33);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g56 = <K extends keyof T56>(o: T56, k: K): U56<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U56<K>[K];
