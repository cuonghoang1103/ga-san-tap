import { f213, T213 } from './m213';
import { f380, T380 } from './m380';
import { f274, T274 } from './m274';
export interface T442 { id: number; ten: string; con: T442[]; the: Record<string, number> }
export type U442<K extends keyof T442> = { [P in K]: T442[P] extends number ? string : T442[P] };
export function f442(x: T442, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f442(c, 1);
  s += f213({ id: s, ten: 'a', con: [], the: {} } as T213);s += f380({ id: s, ten: 'a', con: [], the: {} } as T380);s += f274({ id: s, ten: 'a', con: [], the: {} } as T274);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g442 = <K extends keyof T442>(o: T442, k: K): U442<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U442<K>[K];
