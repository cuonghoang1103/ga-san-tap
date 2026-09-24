import { f3, T3 } from './m003';
import { f139, T139 } from './m139';
import { f75, T75 } from './m075';
export interface T219 { id: number; ten: string; con: T219[]; the: Record<string, number> }
export type U219<K extends keyof T219> = { [P in K]: T219[P] extends number ? string : T219[P] };
export function f219(x: T219, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f219(c, 1);
  s += f3({ id: s, ten: 'a', con: [], the: {} } as T3);s += f139({ id: s, ten: 'a', con: [], the: {} } as T139);s += f75({ id: s, ten: 'a', con: [], the: {} } as T75);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g219 = <K extends keyof T219>(o: T219, k: K): U219<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U219<K>[K];
