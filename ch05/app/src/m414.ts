import { f171, T171 } from './m171';
import { f397, T397 } from './m397';
import { f248, T248 } from './m248';
export interface T414 { id: number; ten: string; con: T414[]; the: Record<string, number> }
export type U414<K extends keyof T414> = { [P in K]: T414[P] extends number ? string : T414[P] };
export function f414(x: T414, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f414(c, 1);
  s += f171({ id: s, ten: 'a', con: [], the: {} } as T171);s += f397({ id: s, ten: 'a', con: [], the: {} } as T397);s += f248({ id: s, ten: 'a', con: [], the: {} } as T248);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g414 = <K extends keyof T414>(o: T414, k: K): U414<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U414<K>[K];
