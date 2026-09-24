import { f456, T456 } from './m456';
import { f109, T109 } from './m109';
import { f161, T161 } from './m161';
export interface T471 { id: number; ten: string; con: T471[]; the: Record<string, number> }
export type U471<K extends keyof T471> = { [P in K]: T471[P] extends number ? string : T471[P] };
export function f471(x: T471, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f471(c, 1);
  s += f456({ id: s, ten: 'a', con: [], the: {} } as T456);s += f109({ id: s, ten: 'a', con: [], the: {} } as T109);s += f161({ id: s, ten: 'a', con: [], the: {} } as T161);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g471 = <K extends keyof T471>(o: T471, k: K): U471<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U471<K>[K];
