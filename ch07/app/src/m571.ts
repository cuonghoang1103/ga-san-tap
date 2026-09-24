import { f49, T49 } from './m049';
import { f396, T396 } from './m396';
import { f91, T91 } from './m091';
export interface T571 { id: number; ten: string; con: T571[]; the: Record<string, number> }
export type U571<K extends keyof T571> = { [P in K]: T571[P] extends number ? string : T571[P] };
export function f571(x: T571, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f571(c, 1);
  s += f49({ id: s, ten: 'a', con: [], the: {} } as T49);s += f396({ id: s, ten: 'a', con: [], the: {} } as T396);s += f91({ id: s, ten: 'a', con: [], the: {} } as T91);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g571 = <K extends keyof T571>(o: T571, k: K): U571<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U571<K>[K];
