import { f194, T194 } from './m194';
import { f11, T11 } from './m011';
import { f62, T62 } from './m062';
export interface T489 { id: number; ten: string; con: T489[]; the: Record<string, number> }
export type U489<K extends keyof T489> = { [P in K]: T489[P] extends number ? string : T489[P] };
export function f489(x: T489, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f489(c, 1);
  s += f194({ id: s, ten: 'a', con: [], the: {} } as T194);s += f11({ id: s, ten: 'a', con: [], the: {} } as T11);s += f62({ id: s, ten: 'a', con: [], the: {} } as T62);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g489 = <K extends keyof T489>(o: T489, k: K): U489<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U489<K>[K];
