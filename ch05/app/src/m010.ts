import { f0, T0 } from './m000';
import { f9, T9 } from './m009';
import { f8, T8 } from './m008';
export interface T10 { id: number; ten: string; con: T10[]; the: Record<string, number> }
export type U10<K extends keyof T10> = { [P in K]: T10[P] extends number ? string : T10[P] };
export function f10(x: T10, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f10(c, 1);
  s += f0({ id: s, ten: 'a', con: [], the: {} } as T0);s += f9({ id: s, ten: 'a', con: [], the: {} } as T9);s += f8({ id: s, ten: 'a', con: [], the: {} } as T8);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g10 = <K extends keyof T10>(o: T10, k: K): U10<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U10<K>[K];
