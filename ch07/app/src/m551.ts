import { f504, T504 } from './m504';
import { f198, T198 } from './m198';
import { f442, T442 } from './m442';
export interface T551 { id: number; ten: string; con: T551[]; the: Record<string, number> }
export type U551<K extends keyof T551> = { [P in K]: T551[P] extends number ? string : T551[P] };
export function f551(x: T551, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f551(c, 1);
  s += f504({ id: s, ten: 'a', con: [], the: {} } as T504);s += f198({ id: s, ten: 'a', con: [], the: {} } as T198);s += f442({ id: s, ten: 'a', con: [], the: {} } as T442);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g551 = <K extends keyof T551>(o: T551, k: K): U551<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U551<K>[K];
