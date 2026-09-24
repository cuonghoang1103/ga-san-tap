import { f40, T40 } from './m040';
import { f296, T296 } from './m296';
import { f28, T28 } from './m028';
export interface T353 { id: number; ten: string; con: T353[]; the: Record<string, number> }
export type U353<K extends keyof T353> = { [P in K]: T353[P] extends number ? string : T353[P] };
export function f353(x: T353, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f353(c, 1);
  s += f40({ id: s, ten: 'a', con: [], the: {} } as T40);s += f296({ id: s, ten: 'a', con: [], the: {} } as T296);s += f28({ id: s, ten: 'a', con: [], the: {} } as T28);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g353 = <K extends keyof T353>(o: T353, k: K): U353<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U353<K>[K];
