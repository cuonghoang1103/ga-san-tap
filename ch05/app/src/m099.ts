import { f74, T74 } from './m074';
import { f70, T70 } from './m070';
import { f98, T98 } from './m098';
export interface T99 { id: number; ten: string; con: T99[]; the: Record<string, number> }
export type U99<K extends keyof T99> = { [P in K]: T99[P] extends number ? string : T99[P] };
export function f99(x: T99, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f99(c, 1);
  s += f74({ id: s, ten: 'a', con: [], the: {} } as T74);s += f70({ id: s, ten: 'a', con: [], the: {} } as T70);s += f98({ id: s, ten: 'a', con: [], the: {} } as T98);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g99 = <K extends keyof T99>(o: T99, k: K): U99<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U99<K>[K];
