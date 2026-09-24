import { f54, T54 } from './m054';
import { f27, T27 } from './m027';
import { f34, T34 } from './m034';
export interface T88 { id: number; ten: string; con: T88[]; the: Record<string, number> }
export type U88<K extends keyof T88> = { [P in K]: T88[P] extends number ? string : T88[P] };
export function f88(x: T88, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f88(c, 1);
  s += f54({ id: s, ten: 'a', con: [], the: {} } as T54);s += f27({ id: s, ten: 'a', con: [], the: {} } as T27);s += f34({ id: s, ten: 'a', con: [], the: {} } as T34);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g88 = <K extends keyof T88>(o: T88, k: K): U88<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U88<K>[K];
