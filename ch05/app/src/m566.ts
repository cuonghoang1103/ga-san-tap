import { f22, T22 } from './m022';
import { f525, T525 } from './m525';
import { f222, T222 } from './m222';
export interface T566 { id: number; ten: string; con: T566[]; the: Record<string, number> }
export type U566<K extends keyof T566> = { [P in K]: T566[P] extends number ? string : T566[P] };
export function f566(x: T566, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f566(c, 1);
  s += f22({ id: s, ten: 'a', con: [], the: {} } as T22);s += f525({ id: s, ten: 'a', con: [], the: {} } as T525);s += f222({ id: s, ten: 'a', con: [], the: {} } as T222);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g566 = <K extends keyof T566>(o: T566, k: K): U566<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U566<K>[K];
