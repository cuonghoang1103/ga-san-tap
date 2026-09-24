import { f28, T28 } from './m028';
import { f72, T72 } from './m072';
import { f10, T10 } from './m010';
export interface T106 { id: number; ten: string; con: T106[]; the: Record<string, number> }
export type U106<K extends keyof T106> = { [P in K]: T106[P] extends number ? string : T106[P] };
export function f106(x: T106, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f106(c, 1);
  s += f28({ id: s, ten: 'a', con: [], the: {} } as T28);s += f72({ id: s, ten: 'a', con: [], the: {} } as T72);s += f10({ id: s, ten: 'a', con: [], the: {} } as T10);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g106 = <K extends keyof T106>(o: T106, k: K): U106<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U106<K>[K];
