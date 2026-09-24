import { f57, T57 } from './m057';
import { f94, T94 } from './m094';
import { f210, T210 } from './m210';
export interface T363 { id: number; ten: string; con: T363[]; the: Record<string, number> }
export type U363<K extends keyof T363> = { [P in K]: T363[P] extends number ? string : T363[P] };
export function f363(x: T363, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f363(c, 1);
  s += f57({ id: s, ten: 'a', con: [], the: {} } as T57);s += f94({ id: s, ten: 'a', con: [], the: {} } as T94);s += f210({ id: s, ten: 'a', con: [], the: {} } as T210);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g363 = <K extends keyof T363>(o: T363, k: K): U363<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U363<K>[K];
