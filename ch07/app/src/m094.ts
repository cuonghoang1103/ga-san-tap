import { f27, T27 } from './m027';
import { f34, T34 } from './m034';
import { f42, T42 } from './m042';
export interface T94 { id: number; ten: string; con: T94[]; the: Record<string, number> }
export type U94<K extends keyof T94> = { [P in K]: T94[P] extends number ? string : T94[P] };
export function f94(x: T94, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f94(c, 1);
  s += f27({ id: s, ten: 'a', con: [], the: {} } as T27);s += f34({ id: s, ten: 'a', con: [], the: {} } as T34);s += f42({ id: s, ten: 'a', con: [], the: {} } as T42);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g94 = <K extends keyof T94>(o: T94, k: K): U94<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U94<K>[K];
