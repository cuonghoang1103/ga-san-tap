import { f34, T34 } from './m034';
import { f39, T39 } from './m039';
import { f21, T21 } from './m021';
export interface T45 { id: number; ten: string; con: T45[]; the: Record<string, number> }
export type U45<K extends keyof T45> = { [P in K]: T45[P] extends number ? string : T45[P] };
export function f45(x: T45, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f45(c, 1);
  s += f34({ id: s, ten: 'a', con: [], the: {} } as T34);s += f39({ id: s, ten: 'a', con: [], the: {} } as T39);s += f21({ id: s, ten: 'a', con: [], the: {} } as T21);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g45 = <K extends keyof T45>(o: T45, k: K): U45<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U45<K>[K];
