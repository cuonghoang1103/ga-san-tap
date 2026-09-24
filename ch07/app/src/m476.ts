import { f325, T325 } from './m325';
import { f275, T275 } from './m275';
import { f424, T424 } from './m424';
export interface T476 { id: number; ten: string; con: T476[]; the: Record<string, number> }
export type U476<K extends keyof T476> = { [P in K]: T476[P] extends number ? string : T476[P] };
export function f476(x: T476, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f476(c, 1);
  s += f325({ id: s, ten: 'a', con: [], the: {} } as T325);s += f275({ id: s, ten: 'a', con: [], the: {} } as T275);s += f424({ id: s, ten: 'a', con: [], the: {} } as T424);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g476 = <K extends keyof T476>(o: T476, k: K): U476<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U476<K>[K];
