import { f22, T22 } from './m022';
import { f18, T18 } from './m018';
import { f4, T4 } from './m004';
export interface T55 { id: number; ten: string; con: T55[]; the: Record<string, number> }
export type U55<K extends keyof T55> = { [P in K]: T55[P] extends number ? string : T55[P] };
export function f55(x: T55, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f55(c, 1);
  s += f22({ id: s, ten: 'a', con: [], the: {} } as T22);s += f18({ id: s, ten: 'a', con: [], the: {} } as T18);s += f4({ id: s, ten: 'a', con: [], the: {} } as T4);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g55 = <K extends keyof T55>(o: T55, k: K): U55<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U55<K>[K];
