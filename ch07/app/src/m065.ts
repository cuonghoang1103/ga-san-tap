import { f2, T2 } from './m002';
import { f28, T28 } from './m028';
import { f50, T50 } from './m050';
export interface T65 { id: number; ten: string; con: T65[]; the: Record<string, number> }
export type U65<K extends keyof T65> = { [P in K]: T65[P] extends number ? string : T65[P] };
export function f65(x: T65, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f65(c, 1);
  s += f2({ id: s, ten: 'a', con: [], the: {} } as T2);s += f28({ id: s, ten: 'a', con: [], the: {} } as T28);s += f50({ id: s, ten: 'a', con: [], the: {} } as T50);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g65 = <K extends keyof T65>(o: T65, k: K): U65<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U65<K>[K];
