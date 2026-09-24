import { f180, T180 } from './m180';
import { f472, T472 } from './m472';
import { f411, T411 } from './m411';
export interface T505 { id: number; ten: string; con: T505[]; the: Record<string, number> }
export type U505<K extends keyof T505> = { [P in K]: T505[P] extends number ? string : T505[P] };
export function f505(x: T505, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f505(c, 1);
  s += f180({ id: s, ten: 'a', con: [], the: {} } as T180);s += f472({ id: s, ten: 'a', con: [], the: {} } as T472);s += f411({ id: s, ten: 'a', con: [], the: {} } as T411);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g505 = <K extends keyof T505>(o: T505, k: K): U505<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U505<K>[K];
