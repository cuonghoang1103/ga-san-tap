import { f9, T9 } from './m009';
import { f39, T39 } from './m039';
import { f38, T38 } from './m038';
export interface T73 { id: number; ten: string; con: T73[]; the: Record<string, number> }
export type U73<K extends keyof T73> = { [P in K]: T73[P] extends number ? string : T73[P] };
export function f73(x: T73, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f73(c, 1);
  s += f9({ id: s, ten: 'a', con: [], the: {} } as T9);s += f39({ id: s, ten: 'a', con: [], the: {} } as T39);s += f38({ id: s, ten: 'a', con: [], the: {} } as T38);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g73 = <K extends keyof T73>(o: T73, k: K): U73<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U73<K>[K];
