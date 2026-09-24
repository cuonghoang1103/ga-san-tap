import { f156, T156 } from './m156';
import { f136, T136 } from './m136';
import { f251, T251 } from './m251';
export interface T461 { id: number; ten: string; con: T461[]; the: Record<string, number> }
export type U461<K extends keyof T461> = { [P in K]: T461[P] extends number ? string : T461[P] };
export function f461(x: T461, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f461(c, 1);
  s += f156({ id: s, ten: 'a', con: [], the: {} } as T156);s += f136({ id: s, ten: 'a', con: [], the: {} } as T136);s += f251({ id: s, ten: 'a', con: [], the: {} } as T251);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g461 = <K extends keyof T461>(o: T461, k: K): U461<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U461<K>[K];
