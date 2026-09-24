import { f5, T5 } from './m005';
import { f104, T104 } from './m104';
import { f184, T184 } from './m184';
export interface T250 { id: number; ten: string; con: T250[]; the: Record<string, number> }
export type U250<K extends keyof T250> = { [P in K]: T250[P] extends number ? string : T250[P] };
export function f250(x: T250, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f250(c, 1);
  s += f5({ id: s, ten: 'a', con: [], the: {} } as T5);s += f104({ id: s, ten: 'a', con: [], the: {} } as T104);s += f184({ id: s, ten: 'a', con: [], the: {} } as T184);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g250 = <K extends keyof T250>(o: T250, k: K): U250<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U250<K>[K];
