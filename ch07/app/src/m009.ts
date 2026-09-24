import { f1, T1 } from './m001';
import { f5, T5 } from './m005';
import { f0, T0 } from './m000';
export interface T9 { id: number; ten: string; con: T9[]; the: Record<string, number> }
export type U9<K extends keyof T9> = { [P in K]: T9[P] extends number ? string : T9[P] };
export function f9(x: T9, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f9(c, 1);
  s += f1({ id: s, ten: 'a', con: [], the: {} } as T1);s += f5({ id: s, ten: 'a', con: [], the: {} } as T5);s += f0({ id: s, ten: 'a', con: [], the: {} } as T0);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g9 = <K extends keyof T9>(o: T9, k: K): U9<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U9<K>[K];
