import { f369, T369 } from './m369';
import { f344, T344 } from './m344';
import { f146, T146 } from './m146';
export interface T583 { id: number; ten: string; con: T583[]; the: Record<string, number> }
export type U583<K extends keyof T583> = { [P in K]: T583[P] extends number ? string : T583[P] };
export function f583(x: T583, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f583(c, 1);
  s += f369({ id: s, ten: 'a', con: [], the: {} } as T369);s += f344({ id: s, ten: 'a', con: [], the: {} } as T344);s += f146({ id: s, ten: 'a', con: [], the: {} } as T146);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g583 = <K extends keyof T583>(o: T583, k: K): U583<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U583<K>[K];
