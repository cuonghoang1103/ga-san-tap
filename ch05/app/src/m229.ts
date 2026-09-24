import { f86, T86 } from './m086';
import { f200, T200 } from './m200';
import { f187, T187 } from './m187';
export interface T229 { id: number; ten: string; con: T229[]; the: Record<string, number> }
export type U229<K extends keyof T229> = { [P in K]: T229[P] extends number ? string : T229[P] };
export function f229(x: T229, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f229(c, 1);
  s += f86({ id: s, ten: 'a', con: [], the: {} } as T86);s += f200({ id: s, ten: 'a', con: [], the: {} } as T200);s += f187({ id: s, ten: 'a', con: [], the: {} } as T187);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g229 = <K extends keyof T229>(o: T229, k: K): U229<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U229<K>[K];
