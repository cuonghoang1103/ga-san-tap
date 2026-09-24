import { f530, T530 } from './m530';
import { f244, T244 } from './m244';
import { f12, T12 } from './m012';
export interface T573 { id: number; ten: string; con: T573[]; the: Record<string, number> }
export type U573<K extends keyof T573> = { [P in K]: T573[P] extends number ? string : T573[P] };
export function f573(x: T573, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f573(c, 1);
  s += f530({ id: s, ten: 'a', con: [], the: {} } as T530);s += f244({ id: s, ten: 'a', con: [], the: {} } as T244);s += f12({ id: s, ten: 'a', con: [], the: {} } as T12);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g573 = <K extends keyof T573>(o: T573, k: K): U573<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U573<K>[K];
