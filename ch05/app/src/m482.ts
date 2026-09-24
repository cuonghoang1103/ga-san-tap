import { f167, T167 } from './m167';
import { f2, T2 } from './m002';
import { f396, T396 } from './m396';
export interface T482 { id: number; ten: string; con: T482[]; the: Record<string, number> }
export type U482<K extends keyof T482> = { [P in K]: T482[P] extends number ? string : T482[P] };
export function f482(x: T482, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f482(c, 1);
  s += f167({ id: s, ten: 'a', con: [], the: {} } as T167);s += f2({ id: s, ten: 'a', con: [], the: {} } as T2);s += f396({ id: s, ten: 'a', con: [], the: {} } as T396);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g482 = <K extends keyof T482>(o: T482, k: K): U482<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U482<K>[K];
