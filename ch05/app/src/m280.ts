import { f59, T59 } from './m059';
import { f105, T105 } from './m105';
import { f156, T156 } from './m156';
export interface T280 { id: number; ten: string; con: T280[]; the: Record<string, number> }
export type U280<K extends keyof T280> = { [P in K]: T280[P] extends number ? string : T280[P] };
export function f280(x: T280, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f280(c, 1);
  s += f59({ id: s, ten: 'a', con: [], the: {} } as T59);s += f105({ id: s, ten: 'a', con: [], the: {} } as T105);s += f156({ id: s, ten: 'a', con: [], the: {} } as T156);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g280 = <K extends keyof T280>(o: T280, k: K): U280<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U280<K>[K];
