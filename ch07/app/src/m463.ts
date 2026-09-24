import { f306, T306 } from './m306';
import { f240, T240 } from './m240';
import { f123, T123 } from './m123';
export interface T463 { id: number; ten: string; con: T463[]; the: Record<string, number> }
export type U463<K extends keyof T463> = { [P in K]: T463[P] extends number ? string : T463[P] };
export function f463(x: T463, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f463(c, 1);
  s += f306({ id: s, ten: 'a', con: [], the: {} } as T306);s += f240({ id: s, ten: 'a', con: [], the: {} } as T240);s += f123({ id: s, ten: 'a', con: [], the: {} } as T123);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g463 = <K extends keyof T463>(o: T463, k: K): U463<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U463<K>[K];
