import { f129, T129 } from './m129';
import { f325, T325 } from './m325';
import { f4, T4 } from './m004';
export interface T396 { id: number; ten: string; con: T396[]; the: Record<string, number> }
export type U396<K extends keyof T396> = { [P in K]: T396[P] extends number ? string : T396[P] };
export function f396(x: T396, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f396(c, 1);
  s += f129({ id: s, ten: 'a', con: [], the: {} } as T129);s += f325({ id: s, ten: 'a', con: [], the: {} } as T325);s += f4({ id: s, ten: 'a', con: [], the: {} } as T4);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g396 = <K extends keyof T396>(o: T396, k: K): U396<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U396<K>[K];
