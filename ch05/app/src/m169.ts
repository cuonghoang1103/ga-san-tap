import { f1, T1 } from './m001';
import { f45, T45 } from './m045';
import { f135, T135 } from './m135';
export interface T169 { id: number; ten: string; con: T169[]; the: Record<string, number> }
export type U169<K extends keyof T169> = { [P in K]: T169[P] extends number ? string : T169[P] };
export function f169(x: T169, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f169(c, 1);
  s += f1({ id: s, ten: 'a', con: [], the: {} } as T1);s += f45({ id: s, ten: 'a', con: [], the: {} } as T45);s += f135({ id: s, ten: 'a', con: [], the: {} } as T135);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g169 = <K extends keyof T169>(o: T169, k: K): U169<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U169<K>[K];
