import { f2, T2 } from './m002';
import { f276, T276 } from './m276';
import { f61, T61 } from './m061';
export interface T386 { id: number; ten: string; con: T386[]; the: Record<string, number> }
export type U386<K extends keyof T386> = { [P in K]: T386[P] extends number ? string : T386[P] };
export function f386(x: T386, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f386(c, 1);
  s += f2({ id: s, ten: 'a', con: [], the: {} } as T2);s += f276({ id: s, ten: 'a', con: [], the: {} } as T276);s += f61({ id: s, ten: 'a', con: [], the: {} } as T61);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g386 = <K extends keyof T386>(o: T386, k: K): U386<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U386<K>[K];
