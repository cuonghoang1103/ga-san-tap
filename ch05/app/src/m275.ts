import { f97, T97 } from './m097';
import { f37, T37 } from './m037';
import { f84, T84 } from './m084';
export interface T275 { id: number; ten: string; con: T275[]; the: Record<string, number> }
export type U275<K extends keyof T275> = { [P in K]: T275[P] extends number ? string : T275[P] };
export function f275(x: T275, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f275(c, 1);
  s += f97({ id: s, ten: 'a', con: [], the: {} } as T97);s += f37({ id: s, ten: 'a', con: [], the: {} } as T37);s += f84({ id: s, ten: 'a', con: [], the: {} } as T84);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g275 = <K extends keyof T275>(o: T275, k: K): U275<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U275<K>[K];
