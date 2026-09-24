import { f17, T17 } from './m017';
import { f21, T21 } from './m021';
import { f68, T68 } from './m068';
export interface T93 { id: number; ten: string; con: T93[]; the: Record<string, number> }
export type U93<K extends keyof T93> = { [P in K]: T93[P] extends number ? string : T93[P] };
export function f93(x: T93, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f93(c, 1);
  s += f17({ id: s, ten: 'a', con: [], the: {} } as T17);s += f21({ id: s, ten: 'a', con: [], the: {} } as T21);s += f68({ id: s, ten: 'a', con: [], the: {} } as T68);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g93 = <K extends keyof T93>(o: T93, k: K): U93<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U93<K>[K];
