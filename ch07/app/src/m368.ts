import { f292, T292 } from './m292';
import { f269, T269 } from './m269';
import { f328, T328 } from './m328';
export interface T368 { id: number; ten: string; con: T368[]; the: Record<string, number> }
export type U368<K extends keyof T368> = { [P in K]: T368[P] extends number ? string : T368[P] };
export function f368(x: T368, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f368(c, 1);
  s += f292({ id: s, ten: 'a', con: [], the: {} } as T292);s += f269({ id: s, ten: 'a', con: [], the: {} } as T269);s += f328({ id: s, ten: 'a', con: [], the: {} } as T328);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g368 = <K extends keyof T368>(o: T368, k: K): U368<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U368<K>[K];
