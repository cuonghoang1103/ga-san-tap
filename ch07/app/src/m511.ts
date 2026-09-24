import { f270, T270 } from './m270';
import { f243, T243 } from './m243';
import { f288, T288 } from './m288';
export interface T511 { id: number; ten: string; con: T511[]; the: Record<string, number> }
export type U511<K extends keyof T511> = { [P in K]: T511[P] extends number ? string : T511[P] };
export function f511(x: T511, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f511(c, 1);
  s += f270({ id: s, ten: 'a', con: [], the: {} } as T270);s += f243({ id: s, ten: 'a', con: [], the: {} } as T243);s += f288({ id: s, ten: 'a', con: [], the: {} } as T288);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g511 = <K extends keyof T511>(o: T511, k: K): U511<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U511<K>[K];
