import { f206, T206 } from './m206';
import { f315, T315 } from './m315';
import { f261, T261 } from './m261';
export interface T381 { id: number; ten: string; con: T381[]; the: Record<string, number> }
export type U381<K extends keyof T381> = { [P in K]: T381[P] extends number ? string : T381[P] };
export function f381(x: T381, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f381(c, 1);
  s += f206({ id: s, ten: 'a', con: [], the: {} } as T206);s += f315({ id: s, ten: 'a', con: [], the: {} } as T315);s += f261({ id: s, ten: 'a', con: [], the: {} } as T261);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g381 = <K extends keyof T381>(o: T381, k: K): U381<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U381<K>[K];
