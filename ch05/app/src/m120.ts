import { f55, T55 } from './m055';
import { f116, T116 } from './m116';
import { f48, T48 } from './m048';
export interface T120 { id: number; ten: string; con: T120[]; the: Record<string, number> }
export type U120<K extends keyof T120> = { [P in K]: T120[P] extends number ? string : T120[P] };
export function f120(x: T120, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f120(c, 1);
  s += f55({ id: s, ten: 'a', con: [], the: {} } as T55);s += f116({ id: s, ten: 'a', con: [], the: {} } as T116);s += f48({ id: s, ten: 'a', con: [], the: {} } as T48);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g120 = <K extends keyof T120>(o: T120, k: K): U120<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U120<K>[K];
