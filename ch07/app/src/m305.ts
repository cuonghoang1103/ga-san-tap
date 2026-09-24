import { f21, T21 } from './m021';
import { f140, T140 } from './m140';
import { f60, T60 } from './m060';
export interface T305 { id: number; ten: string; con: T305[]; the: Record<string, number> }
export type U305<K extends keyof T305> = { [P in K]: T305[P] extends number ? string : T305[P] };
export function f305(x: T305, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f305(c, 1);
  s += f21({ id: s, ten: 'a', con: [], the: {} } as T21);s += f140({ id: s, ten: 'a', con: [], the: {} } as T140);s += f60({ id: s, ten: 'a', con: [], the: {} } as T60);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g305 = <K extends keyof T305>(o: T305, k: K): U305<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U305<K>[K];
