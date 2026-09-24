import { f454, T454 } from './m454';
import { f71, T71 } from './m071';
import { f357, T357 } from './m357';
export interface T474 { id: number; ten: string; con: T474[]; the: Record<string, number> }
export type U474<K extends keyof T474> = { [P in K]: T474[P] extends number ? string : T474[P] };
export function f474(x: T474, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f474(c, 1);
  s += f454({ id: s, ten: 'a', con: [], the: {} } as T454);s += f71({ id: s, ten: 'a', con: [], the: {} } as T71);s += f357({ id: s, ten: 'a', con: [], the: {} } as T357);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g474 = <K extends keyof T474>(o: T474, k: K): U474<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U474<K>[K];
