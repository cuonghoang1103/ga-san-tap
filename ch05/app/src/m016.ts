import { f14, T14 } from './m014';
import { f4, T4 } from './m004';
import { f0, T0 } from './m000';
export interface T16 { id: number; ten: string; con: T16[]; the: Record<string, number> }
export type U16<K extends keyof T16> = { [P in K]: T16[P] extends number ? string : T16[P] };
export function f16(x: T16, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f16(c, 1);
  s += f14({ id: s, ten: 'a', con: [], the: {} } as T14);s += f4({ id: s, ten: 'a', con: [], the: {} } as T4);s += f0({ id: s, ten: 'a', con: [], the: {} } as T0);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g16 = <K extends keyof T16>(o: T16, k: K): U16<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U16<K>[K];
