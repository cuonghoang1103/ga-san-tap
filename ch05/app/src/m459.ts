import { f76, T76 } from './m076';
import { f211, T211 } from './m211';
import { f138, T138 } from './m138';
export interface T459 { id: number; ten: string; con: T459[]; the: Record<string, number> }
export type U459<K extends keyof T459> = { [P in K]: T459[P] extends number ? string : T459[P] };
export function f459(x: T459, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f459(c, 1);
  s += f76({ id: s, ten: 'a', con: [], the: {} } as T76);s += f211({ id: s, ten: 'a', con: [], the: {} } as T211);s += f138({ id: s, ten: 'a', con: [], the: {} } as T138);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g459 = <K extends keyof T459>(o: T459, k: K): U459<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U459<K>[K];
