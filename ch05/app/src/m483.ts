import { f10, T10 } from './m010';
import { f420, T420 } from './m420';
import { f156, T156 } from './m156';
export interface T483 { id: number; ten: string; con: T483[]; the: Record<string, number> }
export type U483<K extends keyof T483> = { [P in K]: T483[P] extends number ? string : T483[P] };
export function f483(x: T483, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f483(c, 1);
  s += f10({ id: s, ten: 'a', con: [], the: {} } as T10);s += f420({ id: s, ten: 'a', con: [], the: {} } as T420);s += f156({ id: s, ten: 'a', con: [], the: {} } as T156);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g483 = <K extends keyof T483>(o: T483, k: K): U483<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U483<K>[K];
