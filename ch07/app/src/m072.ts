import { f27, T27 } from './m027';
import { f6, T6 } from './m006';
import { f39, T39 } from './m039';
export interface T72 { id: number; ten: string; con: T72[]; the: Record<string, number> }
export type U72<K extends keyof T72> = { [P in K]: T72[P] extends number ? string : T72[P] };
export function f72(x: T72, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f72(c, 1);
  s += f27({ id: s, ten: 'a', con: [], the: {} } as T27);s += f6({ id: s, ten: 'a', con: [], the: {} } as T6);s += f39({ id: s, ten: 'a', con: [], the: {} } as T39);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g72 = <K extends keyof T72>(o: T72, k: K): U72<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U72<K>[K];
