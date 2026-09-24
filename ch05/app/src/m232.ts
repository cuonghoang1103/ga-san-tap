import { f97, T97 } from './m097';
import { f52, T52 } from './m052';
import { f142, T142 } from './m142';
export interface T232 { id: number; ten: string; con: T232[]; the: Record<string, number> }
export type U232<K extends keyof T232> = { [P in K]: T232[P] extends number ? string : T232[P] };
export function f232(x: T232, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f232(c, 1);
  s += f97({ id: s, ten: 'a', con: [], the: {} } as T97);s += f52({ id: s, ten: 'a', con: [], the: {} } as T52);s += f142({ id: s, ten: 'a', con: [], the: {} } as T142);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g232 = <K extends keyof T232>(o: T232, k: K): U232<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U232<K>[K];
