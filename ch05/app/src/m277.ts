import { f235, T235 } from './m235';
import { f269, T269 } from './m269';
import { f83, T83 } from './m083';
export interface T277 { id: number; ten: string; con: T277[]; the: Record<string, number> }
export type U277<K extends keyof T277> = { [P in K]: T277[P] extends number ? string : T277[P] };
export function f277(x: T277, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f277(c, 1);
  s += f235({ id: s, ten: 'a', con: [], the: {} } as T235);s += f269({ id: s, ten: 'a', con: [], the: {} } as T269);s += f83({ id: s, ten: 'a', con: [], the: {} } as T83);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g277 = <K extends keyof T277>(o: T277, k: K): U277<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U277<K>[K];
