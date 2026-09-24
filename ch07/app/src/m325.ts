import { f65, T65 } from './m065';
import { f202, T202 } from './m202';
import { f228, T228 } from './m228';
export interface T325 { id: number; ten: string; con: T325[]; the: Record<string, number> }
export type U325<K extends keyof T325> = { [P in K]: T325[P] extends number ? string : T325[P] };
export function f325(x: T325, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f325(c, 1);
  s += f65({ id: s, ten: 'a', con: [], the: {} } as T65);s += f202({ id: s, ten: 'a', con: [], the: {} } as T202);s += f228({ id: s, ten: 'a', con: [], the: {} } as T228);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g325 = <K extends keyof T325>(o: T325, k: K): U325<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U325<K>[K];
