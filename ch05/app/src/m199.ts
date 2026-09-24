import { f124, T124 } from './m124';
import { f54, T54 } from './m054';
import { f30, T30 } from './m030';
export interface T199 { id: number; ten: string; con: T199[]; the: Record<string, number> }
export type U199<K extends keyof T199> = { [P in K]: T199[P] extends number ? string : T199[P] };
export function f199(x: T199, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f199(c, 1);
  s += f124({ id: s, ten: 'a', con: [], the: {} } as T124);s += f54({ id: s, ten: 'a', con: [], the: {} } as T54);s += f30({ id: s, ten: 'a', con: [], the: {} } as T30);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g199 = <K extends keyof T199>(o: T199, k: K): U199<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U199<K>[K];
