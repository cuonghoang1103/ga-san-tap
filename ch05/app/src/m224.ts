import { f128, T128 } from './m128';
import { f173, T173 } from './m173';
import { f91, T91 } from './m091';
export interface T224 { id: number; ten: string; con: T224[]; the: Record<string, number> }
export type U224<K extends keyof T224> = { [P in K]: T224[P] extends number ? string : T224[P] };
export function f224(x: T224, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f224(c, 1);
  s += f128({ id: s, ten: 'a', con: [], the: {} } as T128);s += f173({ id: s, ten: 'a', con: [], the: {} } as T173);s += f91({ id: s, ten: 'a', con: [], the: {} } as T91);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g224 = <K extends keyof T224>(o: T224, k: K): U224<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U224<K>[K];
