import { f205, T205 } from './m205';
import { f366, T366 } from './m366';
import { f217, T217 } from './m217';
export interface T416 { id: number; ten: string; con: T416[]; the: Record<string, number> }
export type U416<K extends keyof T416> = { [P in K]: T416[P] extends number ? string : T416[P] };
export function f416(x: T416, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f416(c, 1);
  s += f205({ id: s, ten: 'a', con: [], the: {} } as T205);s += f366({ id: s, ten: 'a', con: [], the: {} } as T366);s += f217({ id: s, ten: 'a', con: [], the: {} } as T217);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g416 = <K extends keyof T416>(o: T416, k: K): U416<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U416<K>[K];
