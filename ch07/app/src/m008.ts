import { f4, T4 } from './m004';
import { f5, T5 } from './m005';
import { f1, T1 } from './m001';
export interface T8 { id: number; ten: string; con: T8[]; the: Record<string, number> }
export type U8<K extends keyof T8> = { [P in K]: T8[P] extends number ? string : T8[P] };
export function f8(x: T8, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f8(c, 1);
  s += f4({ id: s, ten: 'a', con: [], the: {} } as T4);s += f5({ id: s, ten: 'a', con: [], the: {} } as T5);s += f1({ id: s, ten: 'a', con: [], the: {} } as T1);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g8 = <K extends keyof T8>(o: T8, k: K): U8<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U8<K>[K];
