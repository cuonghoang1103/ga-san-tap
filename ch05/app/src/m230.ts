import { f174, T174 } from './m174';
import { f146, T146 } from './m146';
import { f126, T126 } from './m126';
export interface T230 { id: number; ten: string; con: T230[]; the: Record<string, number> }
export type U230<K extends keyof T230> = { [P in K]: T230[P] extends number ? string : T230[P] };
export function f230(x: T230, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f230(c, 1);
  s += f174({ id: s, ten: 'a', con: [], the: {} } as T174);s += f146({ id: s, ten: 'a', con: [], the: {} } as T146);s += f126({ id: s, ten: 'a', con: [], the: {} } as T126);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g230 = <K extends keyof T230>(o: T230, k: K): U230<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U230<K>[K];
