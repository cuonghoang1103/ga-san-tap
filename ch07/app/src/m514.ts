import { f55, T55 } from './m055';
import { f112, T112 } from './m112';
import { f179, T179 } from './m179';
export interface T514 { id: number; ten: string; con: T514[]; the: Record<string, number> }
export type U514<K extends keyof T514> = { [P in K]: T514[P] extends number ? string : T514[P] };
export function f514(x: T514, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f514(c, 1);
  s += f55({ id: s, ten: 'a', con: [], the: {} } as T55);s += f112({ id: s, ten: 'a', con: [], the: {} } as T112);s += f179({ id: s, ten: 'a', con: [], the: {} } as T179);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g514 = <K extends keyof T514>(o: T514, k: K): U514<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U514<K>[K];
