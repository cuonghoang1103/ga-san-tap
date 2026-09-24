import { f205, T205 } from './m205';
import { f141, T141 } from './m141';
import { f155, T155 } from './m155';
export interface T264 { id: number; ten: string; con: T264[]; the: Record<string, number> }
export type U264<K extends keyof T264> = { [P in K]: T264[P] extends number ? string : T264[P] };
export function f264(x: T264, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f264(c, 1);
  s += f205({ id: s, ten: 'a', con: [], the: {} } as T205);s += f141({ id: s, ten: 'a', con: [], the: {} } as T141);s += f155({ id: s, ten: 'a', con: [], the: {} } as T155);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g264 = <K extends keyof T264>(o: T264, k: K): U264<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U264<K>[K];
