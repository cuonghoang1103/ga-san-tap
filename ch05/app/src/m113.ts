import { f52, T52 } from './m052';
import { f14, T14 } from './m014';
import { f105, T105 } from './m105';
export interface T113 { id: number; ten: string; con: T113[]; the: Record<string, number> }
export type U113<K extends keyof T113> = { [P in K]: T113[P] extends number ? string : T113[P] };
export function f113(x: T113, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f113(c, 1);
  s += f52({ id: s, ten: 'a', con: [], the: {} } as T52);s += f14({ id: s, ten: 'a', con: [], the: {} } as T14);s += f105({ id: s, ten: 'a', con: [], the: {} } as T105);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g113 = <K extends keyof T113>(o: T113, k: K): U113<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U113<K>[K];
