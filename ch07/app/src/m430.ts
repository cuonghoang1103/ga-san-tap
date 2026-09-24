import { f135, T135 } from './m135';
import { f350, T350 } from './m350';
import { f142, T142 } from './m142';
export interface T430 { id: number; ten: string; con: T430[]; the: Record<string, number> }
export type U430<K extends keyof T430> = { [P in K]: T430[P] extends number ? string : T430[P] };
export function f430(x: T430, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f430(c, 1);
  s += f135({ id: s, ten: 'a', con: [], the: {} } as T135);s += f350({ id: s, ten: 'a', con: [], the: {} } as T350);s += f142({ id: s, ten: 'a', con: [], the: {} } as T142);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g430 = <K extends keyof T430>(o: T430, k: K): U430<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U430<K>[K];
