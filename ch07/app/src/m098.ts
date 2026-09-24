import { f91, T91 } from './m091';
import { f62, T62 } from './m062';
import { f17, T17 } from './m017';
export interface T98 { id: number; ten: string; con: T98[]; the: Record<string, number> }
export type U98<K extends keyof T98> = { [P in K]: T98[P] extends number ? string : T98[P] };
export function f98(x: T98, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f98(c, 1);
  s += f91({ id: s, ten: 'a', con: [], the: {} } as T91);s += f62({ id: s, ten: 'a', con: [], the: {} } as T62);s += f17({ id: s, ten: 'a', con: [], the: {} } as T17);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g98 = <K extends keyof T98>(o: T98, k: K): U98<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U98<K>[K];
