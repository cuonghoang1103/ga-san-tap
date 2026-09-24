import { f17, T17 } from './m017';
import { f253, T253 } from './m253';
import { f270, T270 } from './m270';
export interface T285 { id: number; ten: string; con: T285[]; the: Record<string, number> }
export type U285<K extends keyof T285> = { [P in K]: T285[P] extends number ? string : T285[P] };
export function f285(x: T285, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f285(c, 1);
  s += f17({ id: s, ten: 'a', con: [], the: {} } as T17);s += f253({ id: s, ten: 'a', con: [], the: {} } as T253);s += f270({ id: s, ten: 'a', con: [], the: {} } as T270);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g285 = <K extends keyof T285>(o: T285, k: K): U285<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U285<K>[K];
