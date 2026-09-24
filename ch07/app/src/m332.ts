import { f48, T48 } from './m048';
import { f217, T217 } from './m217';
import { f125, T125 } from './m125';
export interface T332 { id: number; ten: string; con: T332[]; the: Record<string, number> }
export type U332<K extends keyof T332> = { [P in K]: T332[P] extends number ? string : T332[P] };
export function f332(x: T332, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f332(c, 1);
  s += f48({ id: s, ten: 'a', con: [], the: {} } as T48);s += f217({ id: s, ten: 'a', con: [], the: {} } as T217);s += f125({ id: s, ten: 'a', con: [], the: {} } as T125);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g332 = <K extends keyof T332>(o: T332, k: K): U332<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U332<K>[K];
