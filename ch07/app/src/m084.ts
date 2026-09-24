import { f2, T2 } from './m002';
import { f41, T41 } from './m041';
import { f78, T78 } from './m078';
export interface T84 { id: number; ten: string; con: T84[]; the: Record<string, number> }
export type U84<K extends keyof T84> = { [P in K]: T84[P] extends number ? string : T84[P] };
export function f84(x: T84, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f84(c, 1);
  s += f2({ id: s, ten: 'a', con: [], the: {} } as T2);s += f41({ id: s, ten: 'a', con: [], the: {} } as T41);s += f78({ id: s, ten: 'a', con: [], the: {} } as T78);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g84 = <K extends keyof T84>(o: T84, k: K): U84<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U84<K>[K];
