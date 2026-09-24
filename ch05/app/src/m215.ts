import { f53, T53 } from './m053';
import { f146, T146 } from './m146';
import { f98, T98 } from './m098';
export interface T215 { id: number; ten: string; con: T215[]; the: Record<string, number> }
export type U215<K extends keyof T215> = { [P in K]: T215[P] extends number ? string : T215[P] };
export function f215(x: T215, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f215(c, 1);
  s += f53({ id: s, ten: 'a', con: [], the: {} } as T53);s += f146({ id: s, ten: 'a', con: [], the: {} } as T146);s += f98({ id: s, ten: 'a', con: [], the: {} } as T98);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g215 = <K extends keyof T215>(o: T215, k: K): U215<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U215<K>[K];
