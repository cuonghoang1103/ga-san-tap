import { f34, T34 } from './m034';
import { f54, T54 } from './m054';
import { f116, T116 } from './m116';
export interface T281 { id: number; ten: string; con: T281[]; the: Record<string, number> }
export type U281<K extends keyof T281> = { [P in K]: T281[P] extends number ? string : T281[P] };
export function f281(x: T281, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f281(c, 1);
  s += f34({ id: s, ten: 'a', con: [], the: {} } as T34);s += f54({ id: s, ten: 'a', con: [], the: {} } as T54);s += f116({ id: s, ten: 'a', con: [], the: {} } as T116);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g281 = <K extends keyof T281>(o: T281, k: K): U281<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U281<K>[K];
