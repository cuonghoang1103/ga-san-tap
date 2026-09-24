import { f166, T166 } from './m166';
import { f34, T34 } from './m034';
import { f19, T19 } from './m019';
export interface T221 { id: number; ten: string; con: T221[]; the: Record<string, number> }
export type U221<K extends keyof T221> = { [P in K]: T221[P] extends number ? string : T221[P] };
export function f221(x: T221, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f221(c, 1);
  s += f166({ id: s, ten: 'a', con: [], the: {} } as T166);s += f34({ id: s, ten: 'a', con: [], the: {} } as T34);s += f19({ id: s, ten: 'a', con: [], the: {} } as T19);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g221 = <K extends keyof T221>(o: T221, k: K): U221<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U221<K>[K];
