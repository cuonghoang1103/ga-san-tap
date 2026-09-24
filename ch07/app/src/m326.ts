import { f12, T12 } from './m012';
import { f268, T268 } from './m268';
import { f138, T138 } from './m138';
export interface T326 { id: number; ten: string; con: T326[]; the: Record<string, number> }
export type U326<K extends keyof T326> = { [P in K]: T326[P] extends number ? string : T326[P] };
export function f326(x: T326, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f326(c, 1);
  s += f12({ id: s, ten: 'a', con: [], the: {} } as T12);s += f268({ id: s, ten: 'a', con: [], the: {} } as T268);s += f138({ id: s, ten: 'a', con: [], the: {} } as T138);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g326 = <K extends keyof T326>(o: T326, k: K): U326<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U326<K>[K];
