import { f128, T128 } from './m128';
import { f90, T90 } from './m090';
import { f49, T49 } from './m049';
export interface T318 { id: number; ten: string; con: T318[]; the: Record<string, number> }
export type U318<K extends keyof T318> = { [P in K]: T318[P] extends number ? string : T318[P] };
export function f318(x: T318, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f318(c, 1);
  s += f128({ id: s, ten: 'a', con: [], the: {} } as T128);s += f90({ id: s, ten: 'a', con: [], the: {} } as T90);s += f49({ id: s, ten: 'a', con: [], the: {} } as T49);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g318 = <K extends keyof T318>(o: T318, k: K): U318<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U318<K>[K];
