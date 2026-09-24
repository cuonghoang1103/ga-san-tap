import { f27, T27 } from './m027';
import { f206, T206 } from './m206';
import { f6, T6 } from './m006';
export interface T217 { id: number; ten: string; con: T217[]; the: Record<string, number> }
export type U217<K extends keyof T217> = { [P in K]: T217[P] extends number ? string : T217[P] };
export function f217(x: T217, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f217(c, 1);
  s += f27({ id: s, ten: 'a', con: [], the: {} } as T27);s += f206({ id: s, ten: 'a', con: [], the: {} } as T206);s += f6({ id: s, ten: 'a', con: [], the: {} } as T6);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g217 = <K extends keyof T217>(o: T217, k: K): U217<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U217<K>[K];
