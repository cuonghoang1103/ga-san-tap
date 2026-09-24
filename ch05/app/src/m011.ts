import { f6, T6 } from './m006';
import { f3, T3 } from './m003';
import { f10, T10 } from './m010';
export interface T11 { id: number; ten: string; con: T11[]; the: Record<string, number> }
export type U11<K extends keyof T11> = { [P in K]: T11[P] extends number ? string : T11[P] };
export function f11(x: T11, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f11(c, 1);
  s += f6({ id: s, ten: 'a', con: [], the: {} } as T6);s += f3({ id: s, ten: 'a', con: [], the: {} } as T3);s += f10({ id: s, ten: 'a', con: [], the: {} } as T10);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g11 = <K extends keyof T11>(o: T11, k: K): U11<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U11<K>[K];
