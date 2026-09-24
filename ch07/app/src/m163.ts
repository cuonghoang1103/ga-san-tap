import { f4, T4 } from './m004';
import { f15, T15 } from './m015';
import { f90, T90 } from './m090';
export interface T163 { id: number; ten: string; con: T163[]; the: Record<string, number> }
export type U163<K extends keyof T163> = { [P in K]: T163[P] extends number ? string : T163[P] };
export function f163(x: T163, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f163(c, 1);
  s += f4({ id: s, ten: 'a', con: [], the: {} } as T4);s += f15({ id: s, ten: 'a', con: [], the: {} } as T15);s += f90({ id: s, ten: 'a', con: [], the: {} } as T90);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g163 = <K extends keyof T163>(o: T163, k: K): U163<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U163<K>[K];
