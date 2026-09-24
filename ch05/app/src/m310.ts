import { f133, T133 } from './m133';
import { f124, T124 } from './m124';
import { f125, T125 } from './m125';
export interface T310 { id: number; ten: string; con: T310[]; the: Record<string, number> }
export type U310<K extends keyof T310> = { [P in K]: T310[P] extends number ? string : T310[P] };
export function f310(x: T310, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f310(c, 1);
  s += f133({ id: s, ten: 'a', con: [], the: {} } as T133);s += f124({ id: s, ten: 'a', con: [], the: {} } as T124);s += f125({ id: s, ten: 'a', con: [], the: {} } as T125);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g310 = <K extends keyof T310>(o: T310, k: K): U310<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U310<K>[K];
