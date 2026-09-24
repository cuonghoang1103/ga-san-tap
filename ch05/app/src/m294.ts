import { f56, T56 } from './m056';
import { f109, T109 } from './m109';
import { f40, T40 } from './m040';
export interface T294 { id: number; ten: string; con: T294[]; the: Record<string, number> }
export type U294<K extends keyof T294> = { [P in K]: T294[P] extends number ? string : T294[P] };
export function f294(x: T294, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f294(c, 1);
  s += f56({ id: s, ten: 'a', con: [], the: {} } as T56);s += f109({ id: s, ten: 'a', con: [], the: {} } as T109);s += f40({ id: s, ten: 'a', con: [], the: {} } as T40);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g294 = <K extends keyof T294>(o: T294, k: K): U294<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U294<K>[K];
