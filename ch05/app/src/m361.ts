import { f75, T75 } from './m075';
import { f128, T128 } from './m128';
import { f351, T351 } from './m351';
export interface T361 { id: number; ten: string; con: T361[]; the: Record<string, number> }
export type U361<K extends keyof T361> = { [P in K]: T361[P] extends number ? string : T361[P] };
export function f361(x: T361, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f361(c, 1);
  s += f75({ id: s, ten: 'a', con: [], the: {} } as T75);s += f128({ id: s, ten: 'a', con: [], the: {} } as T128);s += f351({ id: s, ten: 'a', con: [], the: {} } as T351);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g361 = <K extends keyof T361>(o: T361, k: K): U361<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U361<K>[K];
