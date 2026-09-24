import { f232, T232 } from './m232';
import { f186, T186 } from './m186';
import { f194, T194 } from './m194';
export interface T352 { id: number; ten: string; con: T352[]; the: Record<string, number> }
export type U352<K extends keyof T352> = { [P in K]: T352[P] extends number ? string : T352[P] };
export function f352(x: T352, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f352(c, 1);
  s += f232({ id: s, ten: 'a', con: [], the: {} } as T232);s += f186({ id: s, ten: 'a', con: [], the: {} } as T186);s += f194({ id: s, ten: 'a', con: [], the: {} } as T194);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g352 = <K extends keyof T352>(o: T352, k: K): U352<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U352<K>[K];
