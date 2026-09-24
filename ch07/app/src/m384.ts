import { f3, T3 } from './m003';
import { f97, T97 } from './m097';
import { f153, T153 } from './m153';
export interface T384 { id: number; ten: string; con: T384[]; the: Record<string, number> }
export type U384<K extends keyof T384> = { [P in K]: T384[P] extends number ? string : T384[P] };
export function f384(x: T384, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f384(c, 1);
  s += f3({ id: s, ten: 'a', con: [], the: {} } as T3);s += f97({ id: s, ten: 'a', con: [], the: {} } as T97);s += f153({ id: s, ten: 'a', con: [], the: {} } as T153);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g384 = <K extends keyof T384>(o: T384, k: K): U384<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U384<K>[K];
