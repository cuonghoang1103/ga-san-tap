import { f306, T306 } from './m306';
import { f29, T29 } from './m029';
import { f272, T272 } from './m272';
export interface T457 { id: number; ten: string; con: T457[]; the: Record<string, number> }
export type U457<K extends keyof T457> = { [P in K]: T457[P] extends number ? string : T457[P] };
export function f457(x: T457, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f457(c, 1);
  s += f306({ id: s, ten: 'a', con: [], the: {} } as T306);s += f29({ id: s, ten: 'a', con: [], the: {} } as T29);s += f272({ id: s, ten: 'a', con: [], the: {} } as T272);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g457 = <K extends keyof T457>(o: T457, k: K): U457<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U457<K>[K];
