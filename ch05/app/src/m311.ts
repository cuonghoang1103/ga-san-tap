import { f30, T30 } from './m030';
import { f301, T301 } from './m301';
import { f302, T302 } from './m302';
export interface T311 { id: number; ten: string; con: T311[]; the: Record<string, number> }
export type U311<K extends keyof T311> = { [P in K]: T311[P] extends number ? string : T311[P] };
export function f311(x: T311, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f311(c, 1);
  s += f30({ id: s, ten: 'a', con: [], the: {} } as T30);s += f301({ id: s, ten: 'a', con: [], the: {} } as T301);s += f302({ id: s, ten: 'a', con: [], the: {} } as T302);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g311 = <K extends keyof T311>(o: T311, k: K): U311<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U311<K>[K];
