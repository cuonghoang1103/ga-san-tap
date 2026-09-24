import { f140, T140 } from './m140';
import { f138, T138 } from './m138';
import { f361, T361 } from './m361';
export interface T453 { id: number; ten: string; con: T453[]; the: Record<string, number> }
export type U453<K extends keyof T453> = { [P in K]: T453[P] extends number ? string : T453[P] };
export function f453(x: T453, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f453(c, 1);
  s += f140({ id: s, ten: 'a', con: [], the: {} } as T140);s += f138({ id: s, ten: 'a', con: [], the: {} } as T138);s += f361({ id: s, ten: 'a', con: [], the: {} } as T361);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g453 = <K extends keyof T453>(o: T453, k: K): U453<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U453<K>[K];
