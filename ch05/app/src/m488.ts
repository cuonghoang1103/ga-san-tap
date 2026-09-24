import { f307, T307 } from './m307';
import { f368, T368 } from './m368';
import { f265, T265 } from './m265';
export interface T488 { id: number; ten: string; con: T488[]; the: Record<string, number> }
export type U488<K extends keyof T488> = { [P in K]: T488[P] extends number ? string : T488[P] };
export function f488(x: T488, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f488(c, 1);
  s += f307({ id: s, ten: 'a', con: [], the: {} } as T307);s += f368({ id: s, ten: 'a', con: [], the: {} } as T368);s += f265({ id: s, ten: 'a', con: [], the: {} } as T265);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g488 = <K extends keyof T488>(o: T488, k: K): U488<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U488<K>[K];
