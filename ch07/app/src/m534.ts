import { f113, T113 } from './m113';
import { f142, T142 } from './m142';
import { f520, T520 } from './m520';
export interface T534 { id: number; ten: string; con: T534[]; the: Record<string, number> }
export type U534<K extends keyof T534> = { [P in K]: T534[P] extends number ? string : T534[P] };
export function f534(x: T534, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f534(c, 1);
  s += f113({ id: s, ten: 'a', con: [], the: {} } as T113);s += f142({ id: s, ten: 'a', con: [], the: {} } as T142);s += f520({ id: s, ten: 'a', con: [], the: {} } as T520);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g534 = <K extends keyof T534>(o: T534, k: K): U534<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U534<K>[K];
