import { f475, T475 } from './m475';
import { f406, T406 } from './m406';
import { f233, T233 } from './m233';
export interface T560 { id: number; ten: string; con: T560[]; the: Record<string, number> }
export type U560<K extends keyof T560> = { [P in K]: T560[P] extends number ? string : T560[P] };
export function f560(x: T560, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f560(c, 1);
  s += f475({ id: s, ten: 'a', con: [], the: {} } as T475);s += f406({ id: s, ten: 'a', con: [], the: {} } as T406);s += f233({ id: s, ten: 'a', con: [], the: {} } as T233);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g560 = <K extends keyof T560>(o: T560, k: K): U560<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U560<K>[K];
