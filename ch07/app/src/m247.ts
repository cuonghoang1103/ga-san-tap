import { f17, T17 } from './m017';
import { f126, T126 } from './m126';
import { f190, T190 } from './m190';
export interface T247 { id: number; ten: string; con: T247[]; the: Record<string, number> }
export type U247<K extends keyof T247> = { [P in K]: T247[P] extends number ? string : T247[P] };
export function f247(x: T247, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f247(c, 1);
  s += f17({ id: s, ten: 'a', con: [], the: {} } as T17);s += f126({ id: s, ten: 'a', con: [], the: {} } as T126);s += f190({ id: s, ten: 'a', con: [], the: {} } as T190);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g247 = <K extends keyof T247>(o: T247, k: K): U247<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U247<K>[K];
