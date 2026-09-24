import { f128, T128 } from './m128';
import { f95, T95 } from './m095';
import { f146, T146 } from './m146';
export interface T222 { id: number; ten: string; con: T222[]; the: Record<string, number> }
export type U222<K extends keyof T222> = { [P in K]: T222[P] extends number ? string : T222[P] };
export function f222(x: T222, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f222(c, 1);
  s += f128({ id: s, ten: 'a', con: [], the: {} } as T128);s += f95({ id: s, ten: 'a', con: [], the: {} } as T95);s += f146({ id: s, ten: 'a', con: [], the: {} } as T146);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g222 = <K extends keyof T222>(o: T222, k: K): U222<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U222<K>[K];
