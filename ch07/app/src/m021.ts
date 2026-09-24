import { f18, T18 } from './m018';
import { f15, T15 } from './m015';
import { f16, T16 } from './m016';
export interface T21 { id: number; ten: string; con: T21[]; the: Record<string, number> }
export type U21<K extends keyof T21> = { [P in K]: T21[P] extends number ? string : T21[P] };
export function f21(x: T21, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f21(c, 1);
  s += f18({ id: s, ten: 'a', con: [], the: {} } as T18);s += f15({ id: s, ten: 'a', con: [], the: {} } as T15);s += f16({ id: s, ten: 'a', con: [], the: {} } as T16);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g21 = <K extends keyof T21>(o: T21, k: K): U21<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U21<K>[K];
