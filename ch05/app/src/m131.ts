import { f28, T28 } from './m028';
import { f64, T64 } from './m064';
import { f55, T55 } from './m055';
export interface T131 { id: number; ten: string; con: T131[]; the: Record<string, number> }
export type U131<K extends keyof T131> = { [P in K]: T131[P] extends number ? string : T131[P] };
export function f131(x: T131, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f131(c, 1);
  s += f28({ id: s, ten: 'a', con: [], the: {} } as T28);s += f64({ id: s, ten: 'a', con: [], the: {} } as T64);s += f55({ id: s, ten: 'a', con: [], the: {} } as T55);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g131 = <K extends keyof T131>(o: T131, k: K): U131<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U131<K>[K];
