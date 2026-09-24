import { f13, T13 } from './m013';
import { f21, T21 } from './m021';
import { f5, T5 } from './m005';
export interface T24 { id: number; ten: string; con: T24[]; the: Record<string, number> }
export type U24<K extends keyof T24> = { [P in K]: T24[P] extends number ? string : T24[P] };
export function f24(x: T24, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f24(c, 1);
  s += f13({ id: s, ten: 'a', con: [], the: {} } as T13);s += f21({ id: s, ten: 'a', con: [], the: {} } as T21);s += f5({ id: s, ten: 'a', con: [], the: {} } as T5);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g24 = <K extends keyof T24>(o: T24, k: K): U24<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U24<K>[K];
