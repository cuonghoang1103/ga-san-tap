import { f7, T7 } from './m007';
import { f198, T198 } from './m198';
import { f74, T74 } from './m074';
export interface T299 { id: number; ten: string; con: T299[]; the: Record<string, number> }
export type U299<K extends keyof T299> = { [P in K]: T299[P] extends number ? string : T299[P] };
export function f299(x: T299, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f299(c, 1);
  s += f7({ id: s, ten: 'a', con: [], the: {} } as T7);s += f198({ id: s, ten: 'a', con: [], the: {} } as T198);s += f74({ id: s, ten: 'a', con: [], the: {} } as T74);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g299 = <K extends keyof T299>(o: T299, k: K): U299<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U299<K>[K];
