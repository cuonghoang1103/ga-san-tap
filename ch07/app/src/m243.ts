import { f99, T99 } from './m099';
import { f148, T148 } from './m148';
import { f109, T109 } from './m109';
export interface T243 { id: number; ten: string; con: T243[]; the: Record<string, number> }
export type U243<K extends keyof T243> = { [P in K]: T243[P] extends number ? string : T243[P] };
export function f243(x: T243, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f243(c, 1);
  s += f99({ id: s, ten: 'a', con: [], the: {} } as T99);s += f148({ id: s, ten: 'a', con: [], the: {} } as T148);s += f109({ id: s, ten: 'a', con: [], the: {} } as T109);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g243 = <K extends keyof T243>(o: T243, k: K): U243<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U243<K>[K];
