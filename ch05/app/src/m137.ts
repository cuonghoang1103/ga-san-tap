import { f58, T58 } from './m058';
import { f99, T99 } from './m099';
import { f78, T78 } from './m078';
export interface T137 { id: number; ten: string; con: T137[]; the: Record<string, number> }
export type U137<K extends keyof T137> = { [P in K]: T137[P] extends number ? string : T137[P] };
export function f137(x: T137, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f137(c, 1);
  s += f58({ id: s, ten: 'a', con: [], the: {} } as T58);s += f99({ id: s, ten: 'a', con: [], the: {} } as T99);s += f78({ id: s, ten: 'a', con: [], the: {} } as T78);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g137 = <K extends keyof T137>(o: T137, k: K): U137<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U137<K>[K];
