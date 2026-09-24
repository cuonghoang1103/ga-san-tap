import { f96, T96 } from './m096';
import { f490, T490 } from './m490';
import { f46, T46 } from './m046';
export interface T572 { id: number; ten: string; con: T572[]; the: Record<string, number> }
export type U572<K extends keyof T572> = { [P in K]: T572[P] extends number ? string : T572[P] };
export function f572(x: T572, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f572(c, 1);
  s += f96({ id: s, ten: 'a', con: [], the: {} } as T96);s += f490({ id: s, ten: 'a', con: [], the: {} } as T490);s += f46({ id: s, ten: 'a', con: [], the: {} } as T46);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g572 = <K extends keyof T572>(o: T572, k: K): U572<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U572<K>[K];
