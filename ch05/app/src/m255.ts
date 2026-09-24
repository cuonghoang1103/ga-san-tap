import { f208, T208 } from './m208';
import { f198, T198 } from './m198';
import { f154, T154 } from './m154';
export interface T255 { id: number; ten: string; con: T255[]; the: Record<string, number> }
export type U255<K extends keyof T255> = { [P in K]: T255[P] extends number ? string : T255[P] };
export function f255(x: T255, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f255(c, 1);
  s += f208({ id: s, ten: 'a', con: [], the: {} } as T208);s += f198({ id: s, ten: 'a', con: [], the: {} } as T198);s += f154({ id: s, ten: 'a', con: [], the: {} } as T154);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g255 = <K extends keyof T255>(o: T255, k: K): U255<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U255<K>[K];
