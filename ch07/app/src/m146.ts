import { f126, T126 } from './m126';
import { f120, T120 } from './m120';
import { f39, T39 } from './m039';
export interface T146 { id: number; ten: string; con: T146[]; the: Record<string, number> }
export type U146<K extends keyof T146> = { [P in K]: T146[P] extends number ? string : T146[P] };
export function f146(x: T146, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f146(c, 1);
  s += f126({ id: s, ten: 'a', con: [], the: {} } as T126);s += f120({ id: s, ten: 'a', con: [], the: {} } as T120);s += f39({ id: s, ten: 'a', con: [], the: {} } as T39);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g146 = <K extends keyof T146>(o: T146, k: K): U146<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U146<K>[K];
