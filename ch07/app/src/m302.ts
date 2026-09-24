import { f40, T40 } from './m040';
import { f236, T236 } from './m236';
import { f155, T155 } from './m155';
export interface T302 { id: number; ten: string; con: T302[]; the: Record<string, number> }
export type U302<K extends keyof T302> = { [P in K]: T302[P] extends number ? string : T302[P] };
export function f302(x: T302, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f302(c, 1);
  s += f40({ id: s, ten: 'a', con: [], the: {} } as T40);s += f236({ id: s, ten: 'a', con: [], the: {} } as T236);s += f155({ id: s, ten: 'a', con: [], the: {} } as T155);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g302 = <K extends keyof T302>(o: T302, k: K): U302<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U302<K>[K];
