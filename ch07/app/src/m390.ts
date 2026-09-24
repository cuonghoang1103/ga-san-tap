import { f269, T269 } from './m269';
import { f210, T210 } from './m210';
import { f277, T277 } from './m277';
export interface T390 { id: number; ten: string; con: T390[]; the: Record<string, number> }
export type U390<K extends keyof T390> = { [P in K]: T390[P] extends number ? string : T390[P] };
export function f390(x: T390, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f390(c, 1);
  s += f269({ id: s, ten: 'a', con: [], the: {} } as T269);s += f210({ id: s, ten: 'a', con: [], the: {} } as T210);s += f277({ id: s, ten: 'a', con: [], the: {} } as T277);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g390 = <K extends keyof T390>(o: T390, k: K): U390<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U390<K>[K];
