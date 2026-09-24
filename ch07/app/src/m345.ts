import { f160, T160 } from './m160';
import { f213, T213 } from './m213';
import { f152, T152 } from './m152';
export interface T345 { id: number; ten: string; con: T345[]; the: Record<string, number> }
export type U345<K extends keyof T345> = { [P in K]: T345[P] extends number ? string : T345[P] };
export function f345(x: T345, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f345(c, 1);
  s += f160({ id: s, ten: 'a', con: [], the: {} } as T160);s += f213({ id: s, ten: 'a', con: [], the: {} } as T213);s += f152({ id: s, ten: 'a', con: [], the: {} } as T152);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g345 = <K extends keyof T345>(o: T345, k: K): U345<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U345<K>[K];
