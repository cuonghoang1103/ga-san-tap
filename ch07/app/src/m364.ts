import { f317, T317 } from './m317';
import { f25, T25 } from './m025';
import { f50, T50 } from './m050';
export interface T364 { id: number; ten: string; con: T364[]; the: Record<string, number> }
export type U364<K extends keyof T364> = { [P in K]: T364[P] extends number ? string : T364[P] };
export function f364(x: T364, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f364(c, 1);
  s += f317({ id: s, ten: 'a', con: [], the: {} } as T317);s += f25({ id: s, ten: 'a', con: [], the: {} } as T25);s += f50({ id: s, ten: 'a', con: [], the: {} } as T50);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g364 = <K extends keyof T364>(o: T364, k: K): U364<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U364<K>[K];
