import { f209, T209 } from './m209';
import { f176, T176 } from './m176';
import { f64, T64 } from './m064';
export interface T342 { id: number; ten: string; con: T342[]; the: Record<string, number> }
export type U342<K extends keyof T342> = { [P in K]: T342[P] extends number ? string : T342[P] };
export function f342(x: T342, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f342(c, 1);
  s += f209({ id: s, ten: 'a', con: [], the: {} } as T209);s += f176({ id: s, ten: 'a', con: [], the: {} } as T176);s += f64({ id: s, ten: 'a', con: [], the: {} } as T64);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g342 = <K extends keyof T342>(o: T342, k: K): U342<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U342<K>[K];
