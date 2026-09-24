import { f215, T215 } from './m215';
import { f205, T205 } from './m205';
import { f144, T144 } from './m144';
export interface T399 { id: number; ten: string; con: T399[]; the: Record<string, number> }
export type U399<K extends keyof T399> = { [P in K]: T399[P] extends number ? string : T399[P] };
export function f399(x: T399, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f399(c, 1);
  s += f215({ id: s, ten: 'a', con: [], the: {} } as T215);s += f205({ id: s, ten: 'a', con: [], the: {} } as T205);s += f144({ id: s, ten: 'a', con: [], the: {} } as T144);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g399 = <K extends keyof T399>(o: T399, k: K): U399<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U399<K>[K];
