import { f15, T15 } from './m015';
import { f23, T23 } from './m023';
import { f0, T0 } from './m000';
export interface T31 { id: number; ten: string; con: T31[]; the: Record<string, number> }
export type U31<K extends keyof T31> = { [P in K]: T31[P] extends number ? string : T31[P] };
export function f31(x: T31, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f31(c, 1);
  s += f15({ id: s, ten: 'a', con: [], the: {} } as T15);s += f23({ id: s, ten: 'a', con: [], the: {} } as T23);s += f0({ id: s, ten: 'a', con: [], the: {} } as T0);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g31 = <K extends keyof T31>(o: T31, k: K): U31<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U31<K>[K];
