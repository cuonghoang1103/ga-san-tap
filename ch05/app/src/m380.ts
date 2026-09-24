import { f263, T263 } from './m263';
import { f249, T249 } from './m249';
import { f39, T39 } from './m039';
export interface T380 { id: number; ten: string; con: T380[]; the: Record<string, number> }
export type U380<K extends keyof T380> = { [P in K]: T380[P] extends number ? string : T380[P] };
export function f380(x: T380, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f380(c, 1);
  s += f263({ id: s, ten: 'a', con: [], the: {} } as T263);s += f249({ id: s, ten: 'a', con: [], the: {} } as T249);s += f39({ id: s, ten: 'a', con: [], the: {} } as T39);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g380 = <K extends keyof T380>(o: T380, k: K): U380<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U380<K>[K];
