import { f31, T31 } from './m031';
import { f268, T268 } from './m268';
import { f66, T66 } from './m066';
export interface T304 { id: number; ten: string; con: T304[]; the: Record<string, number> }
export type U304<K extends keyof T304> = { [P in K]: T304[P] extends number ? string : T304[P] };
export function f304(x: T304, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f304(c, 1);
  s += f31({ id: s, ten: 'a', con: [], the: {} } as T31);s += f268({ id: s, ten: 'a', con: [], the: {} } as T268);s += f66({ id: s, ten: 'a', con: [], the: {} } as T66);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g304 = <K extends keyof T304>(o: T304, k: K): U304<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U304<K>[K];
