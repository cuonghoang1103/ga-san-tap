import { f8, T8 } from './m008';
import { f5, T5 } from './m005';
import { f10, T10 } from './m010';
export interface T92 { id: number; ten: string; con: T92[]; the: Record<string, number> }
export type U92<K extends keyof T92> = { [P in K]: T92[P] extends number ? string : T92[P] };
export function f92(x: T92, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f92(c, 1);
  s += f8({ id: s, ten: 'a', con: [], the: {} } as T8);s += f5({ id: s, ten: 'a', con: [], the: {} } as T5);s += f10({ id: s, ten: 'a', con: [], the: {} } as T10);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g92 = <K extends keyof T92>(o: T92, k: K): U92<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U92<K>[K];
