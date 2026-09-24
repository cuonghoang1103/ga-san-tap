import { f110, T110 } from './m110';
import { f137, T137 } from './m137';
import { f40, T40 } from './m040';
export interface T155 { id: number; ten: string; con: T155[]; the: Record<string, number> }
export type U155<K extends keyof T155> = { [P in K]: T155[P] extends number ? string : T155[P] };
export function f155(x: T155, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f155(c, 1);
  s += f110({ id: s, ten: 'a', con: [], the: {} } as T110);s += f137({ id: s, ten: 'a', con: [], the: {} } as T137);s += f40({ id: s, ten: 'a', con: [], the: {} } as T40);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g155 = <K extends keyof T155>(o: T155, k: K): U155<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U155<K>[K];
