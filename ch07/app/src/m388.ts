import { f161, T161 } from './m161';
import { f278, T278 } from './m278';
import { f330, T330 } from './m330';
export interface T388 { id: number; ten: string; con: T388[]; the: Record<string, number> }
export type U388<K extends keyof T388> = { [P in K]: T388[P] extends number ? string : T388[P] };
export function f388(x: T388, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f388(c, 1);
  s += f161({ id: s, ten: 'a', con: [], the: {} } as T161);s += f278({ id: s, ten: 'a', con: [], the: {} } as T278);s += f330({ id: s, ten: 'a', con: [], the: {} } as T330);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g388 = <K extends keyof T388>(o: T388, k: K): U388<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U388<K>[K];
