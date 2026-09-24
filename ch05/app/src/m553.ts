import { f499, T499 } from './m499';
import { f272, T272 } from './m272';
import { f128, T128 } from './m128';
export interface T553 { id: number; ten: string; con: T553[]; the: Record<string, number> }
export type U553<K extends keyof T553> = { [P in K]: T553[P] extends number ? string : T553[P] };
export function f553(x: T553, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f553(c, 1);
  s += f499({ id: s, ten: 'a', con: [], the: {} } as T499);s += f272({ id: s, ten: 'a', con: [], the: {} } as T272);s += f128({ id: s, ten: 'a', con: [], the: {} } as T128);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g553 = <K extends keyof T553>(o: T553, k: K): U553<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U553<K>[K];
