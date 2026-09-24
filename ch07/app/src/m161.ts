import { f43, T43 } from './m043';
import { f66, T66 } from './m066';
import { f124, T124 } from './m124';
export interface T161 { id: number; ten: string; con: T161[]; the: Record<string, number> }
export type U161<K extends keyof T161> = { [P in K]: T161[P] extends number ? string : T161[P] };
export function f161(x: T161, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f161(c, 1);
  s += f43({ id: s, ten: 'a', con: [], the: {} } as T43);s += f66({ id: s, ten: 'a', con: [], the: {} } as T66);s += f124({ id: s, ten: 'a', con: [], the: {} } as T124);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g161 = <K extends keyof T161>(o: T161, k: K): U161<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U161<K>[K];
