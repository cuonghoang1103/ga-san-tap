import { f81, T81 } from './m081';
import { f78, T78 } from './m078';
import { f27, T27 } from './m027';
export interface T150 { id: number; ten: string; con: T150[]; the: Record<string, number> }
export type U150<K extends keyof T150> = { [P in K]: T150[P] extends number ? string : T150[P] };
export function f150(x: T150, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f150(c, 1);
  s += f81({ id: s, ten: 'a', con: [], the: {} } as T81);s += f78({ id: s, ten: 'a', con: [], the: {} } as T78);s += f27({ id: s, ten: 'a', con: [], the: {} } as T27);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g150 = <K extends keyof T150>(o: T150, k: K): U150<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U150<K>[K];
