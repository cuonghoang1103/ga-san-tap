import { f0, T0 } from './m000';
import { f48, T48 } from './m048';
import { f17, T17 } from './m017';
export interface T52 { id: number; ten: string; con: T52[]; the: Record<string, number> }
export type U52<K extends keyof T52> = { [P in K]: T52[P] extends number ? string : T52[P] };
export function f52(x: T52, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f52(c, 1);
  s += f0({ id: s, ten: 'a', con: [], the: {} } as T0);s += f48({ id: s, ten: 'a', con: [], the: {} } as T48);s += f17({ id: s, ten: 'a', con: [], the: {} } as T17);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g52 = <K extends keyof T52>(o: T52, k: K): U52<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U52<K>[K];
