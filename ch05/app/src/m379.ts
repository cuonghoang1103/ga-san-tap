import { f4, T4 } from './m004';
import { f272, T272 } from './m272';
import { f194, T194 } from './m194';
export interface T379 { id: number; ten: string; con: T379[]; the: Record<string, number> }
export type U379<K extends keyof T379> = { [P in K]: T379[P] extends number ? string : T379[P] };
export function f379(x: T379, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f379(c, 1);
  s += f4({ id: s, ten: 'a', con: [], the: {} } as T4);s += f272({ id: s, ten: 'a', con: [], the: {} } as T272);s += f194({ id: s, ten: 'a', con: [], the: {} } as T194);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g379 = <K extends keyof T379>(o: T379, k: K): U379<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U379<K>[K];
