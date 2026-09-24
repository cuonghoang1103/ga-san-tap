import { f43, T43 } from './m043';
import { f380, T380 } from './m380';
import { f114, T114 } from './m114';
export interface T485 { id: number; ten: string; con: T485[]; the: Record<string, number> }
export type U485<K extends keyof T485> = { [P in K]: T485[P] extends number ? string : T485[P] };
export function f485(x: T485, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f485(c, 1);
  s += f43({ id: s, ten: 'a', con: [], the: {} } as T43);s += f380({ id: s, ten: 'a', con: [], the: {} } as T380);s += f114({ id: s, ten: 'a', con: [], the: {} } as T114);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g485 = <K extends keyof T485>(o: T485, k: K): U485<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U485<K>[K];
