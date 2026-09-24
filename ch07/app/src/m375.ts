import { f217, T217 } from './m217';
import { f231, T231 } from './m231';
import { f345, T345 } from './m345';
export interface T375 { id: number; ten: string; con: T375[]; the: Record<string, number> }
export type U375<K extends keyof T375> = { [P in K]: T375[P] extends number ? string : T375[P] };
export function f375(x: T375, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f375(c, 1);
  s += f217({ id: s, ten: 'a', con: [], the: {} } as T217);s += f231({ id: s, ten: 'a', con: [], the: {} } as T231);s += f345({ id: s, ten: 'a', con: [], the: {} } as T345);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g375 = <K extends keyof T375>(o: T375, k: K): U375<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U375<K>[K];
