import { f47, T47 } from './m047';
import { f43, T43 } from './m043';
import { f14, T14 } from './m014';
export interface T96 { id: number; ten: string; con: T96[]; the: Record<string, number> }
export type U96<K extends keyof T96> = { [P in K]: T96[P] extends number ? string : T96[P] };
export function f96(x: T96, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f96(c, 1);
  s += f47({ id: s, ten: 'a', con: [], the: {} } as T47);s += f43({ id: s, ten: 'a', con: [], the: {} } as T43);s += f14({ id: s, ten: 'a', con: [], the: {} } as T14);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g96 = <K extends keyof T96>(o: T96, k: K): U96<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U96<K>[K];
