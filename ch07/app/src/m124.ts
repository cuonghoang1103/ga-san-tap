import { f40, T40 } from './m040';
import { f12, T12 } from './m012';
import { f26, T26 } from './m026';
export interface T124 { id: number; ten: string; con: T124[]; the: Record<string, number> }
export type U124<K extends keyof T124> = { [P in K]: T124[P] extends number ? string : T124[P] };
export function f124(x: T124, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f124(c, 1);
  s += f40({ id: s, ten: 'a', con: [], the: {} } as T40);s += f12({ id: s, ten: 'a', con: [], the: {} } as T12);s += f26({ id: s, ten: 'a', con: [], the: {} } as T26);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g124 = <K extends keyof T124>(o: T124, k: K): U124<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U124<K>[K];
