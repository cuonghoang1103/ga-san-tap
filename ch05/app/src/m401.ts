import { f9, T9 } from './m009';
import { f46, T46 } from './m046';
import { f2, T2 } from './m002';
export interface T401 { id: number; ten: string; con: T401[]; the: Record<string, number> }
export type U401<K extends keyof T401> = { [P in K]: T401[P] extends number ? string : T401[P] };
export function f401(x: T401, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f401(c, 1);
  s += f9({ id: s, ten: 'a', con: [], the: {} } as T9);s += f46({ id: s, ten: 'a', con: [], the: {} } as T46);s += f2({ id: s, ten: 'a', con: [], the: {} } as T2);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g401 = <K extends keyof T401>(o: T401, k: K): U401<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U401<K>[K];
