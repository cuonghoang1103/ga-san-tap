import { f5, T5 } from './m005';
import { f1, T1 } from './m001';
import { f28, T28 } from './m028';
export interface T51 { id: number; ten: string; con: T51[]; the: Record<string, number> }
export type U51<K extends keyof T51> = { [P in K]: T51[P] extends number ? string : T51[P] };
export function f51(x: T51, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f51(c, 1);
  s += f5({ id: s, ten: 'a', con: [], the: {} } as T5);s += f1({ id: s, ten: 'a', con: [], the: {} } as T1);s += f28({ id: s, ten: 'a', con: [], the: {} } as T28);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g51 = <K extends keyof T51>(o: T51, k: K): U51<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U51<K>[K];
