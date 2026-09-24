import { f168, T168 } from './m168';
import { f140, T140 } from './m140';
import { f4, T4 } from './m004';
export interface T502 { id: number; ten: string; con: T502[]; the: Record<string, number> }
export type U502<K extends keyof T502> = { [P in K]: T502[P] extends number ? string : T502[P] };
export function f502(x: T502, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f502(c, 1);
  s += f168({ id: s, ten: 'a', con: [], the: {} } as T168);s += f140({ id: s, ten: 'a', con: [], the: {} } as T140);s += f4({ id: s, ten: 'a', con: [], the: {} } as T4);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g502 = <K extends keyof T502>(o: T502, k: K): U502<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U502<K>[K];
