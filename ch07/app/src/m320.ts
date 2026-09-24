import { f219, T219 } from './m219';
import { f22, T22 } from './m022';
import { f27, T27 } from './m027';
export interface T320 { id: number; ten: string; con: T320[]; the: Record<string, number> }
export type U320<K extends keyof T320> = { [P in K]: T320[P] extends number ? string : T320[P] };
export function f320(x: T320, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f320(c, 1);
  s += f219({ id: s, ten: 'a', con: [], the: {} } as T219);s += f22({ id: s, ten: 'a', con: [], the: {} } as T22);s += f27({ id: s, ten: 'a', con: [], the: {} } as T27);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g320 = <K extends keyof T320>(o: T320, k: K): U320<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U320<K>[K];
