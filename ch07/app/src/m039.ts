import { f33, T33 } from './m033';
import { f35, T35 } from './m035';
import { f13, T13 } from './m013';
export interface T39 { id: number; ten: string; con: T39[]; the: Record<string, number> }
export type U39<K extends keyof T39> = { [P in K]: T39[P] extends number ? string : T39[P] };
export function f39(x: T39, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f39(c, 1);
  s += f33({ id: s, ten: 'a', con: [], the: {} } as T33);s += f35({ id: s, ten: 'a', con: [], the: {} } as T35);s += f13({ id: s, ten: 'a', con: [], the: {} } as T13);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g39 = <K extends keyof T39>(o: T39, k: K): U39<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U39<K>[K];
