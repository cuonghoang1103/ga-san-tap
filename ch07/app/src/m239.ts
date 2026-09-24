import { f78, T78 } from './m078';
import { f179, T179 } from './m179';
import { f43, T43 } from './m043';
export interface T239 { id: number; ten: string; con: T239[]; the: Record<string, number> }
export type U239<K extends keyof T239> = { [P in K]: T239[P] extends number ? string : T239[P] };
export function f239(x: T239, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f239(c, 1);
  s += f78({ id: s, ten: 'a', con: [], the: {} } as T78);s += f179({ id: s, ten: 'a', con: [], the: {} } as T179);s += f43({ id: s, ten: 'a', con: [], the: {} } as T43);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g239 = <K extends keyof T239>(o: T239, k: K): U239<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U239<K>[K];
