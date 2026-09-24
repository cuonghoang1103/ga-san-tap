import { f233, T233 } from './m233';
import { f59, T59 } from './m059';
import { f247, T247 } from './m247';
export interface T406 { id: number; ten: string; con: T406[]; the: Record<string, number> }
export type U406<K extends keyof T406> = { [P in K]: T406[P] extends number ? string : T406[P] };
export function f406(x: T406, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f406(c, 1);
  s += f233({ id: s, ten: 'a', con: [], the: {} } as T233);s += f59({ id: s, ten: 'a', con: [], the: {} } as T59);s += f247({ id: s, ten: 'a', con: [], the: {} } as T247);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g406 = <K extends keyof T406>(o: T406, k: K): U406<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U406<K>[K];
