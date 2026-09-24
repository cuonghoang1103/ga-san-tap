import { f112, T112 } from './m112';
import { f137, T137 } from './m137';
import { f116, T116 } from './m116';
export interface T159 { id: number; ten: string; con: T159[]; the: Record<string, number> }
export type U159<K extends keyof T159> = { [P in K]: T159[P] extends number ? string : T159[P] };
export function f159(x: T159, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f159(c, 1);
  s += f112({ id: s, ten: 'a', con: [], the: {} } as T112);s += f137({ id: s, ten: 'a', con: [], the: {} } as T137);s += f116({ id: s, ten: 'a', con: [], the: {} } as T116);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g159 = <K extends keyof T159>(o: T159, k: K): U159<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U159<K>[K];
