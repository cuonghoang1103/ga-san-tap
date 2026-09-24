import { f78, T78 } from './m078';
import { f138, T138 } from './m138';
import { f102, T102 } from './m102';
export interface T228 { id: number; ten: string; con: T228[]; the: Record<string, number> }
export type U228<K extends keyof T228> = { [P in K]: T228[P] extends number ? string : T228[P] };
export function f228(x: T228, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f228(c, 1);
  s += f78({ id: s, ten: 'a', con: [], the: {} } as T78);s += f138({ id: s, ten: 'a', con: [], the: {} } as T138);s += f102({ id: s, ten: 'a', con: [], the: {} } as T102);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g228 = <K extends keyof T228>(o: T228, k: K): U228<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U228<K>[K];
