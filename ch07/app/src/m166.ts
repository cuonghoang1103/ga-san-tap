import { f70, T70 } from './m070';
import { f101, T101 } from './m101';
import { f144, T144 } from './m144';
export interface T166 { id: number; ten: string; con: T166[]; the: Record<string, number> }
export type U166<K extends keyof T166> = { [P in K]: T166[P] extends number ? string : T166[P] };
export function f166(x: T166, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f166(c, 1);
  s += f70({ id: s, ten: 'a', con: [], the: {} } as T70);s += f101({ id: s, ten: 'a', con: [], the: {} } as T101);s += f144({ id: s, ten: 'a', con: [], the: {} } as T144);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g166 = <K extends keyof T166>(o: T166, k: K): U166<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U166<K>[K];
