import { f120, T120 } from './m120';
import { f148, T148 } from './m148';
import { f276, T276 } from './m276';
export interface T526 { id: number; ten: string; con: T526[]; the: Record<string, number> }
export type U526<K extends keyof T526> = { [P in K]: T526[P] extends number ? string : T526[P] };
export function f526(x: T526, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f526(c, 1);
  s += f120({ id: s, ten: 'a', con: [], the: {} } as T120);s += f148({ id: s, ten: 'a', con: [], the: {} } as T148);s += f276({ id: s, ten: 'a', con: [], the: {} } as T276);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g526 = <K extends keyof T526>(o: T526, k: K): U526<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U526<K>[K];
