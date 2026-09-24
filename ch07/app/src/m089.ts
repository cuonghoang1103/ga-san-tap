import { f86, T86 } from './m086';
import { f12, T12 } from './m012';
import { f48, T48 } from './m048';
export interface T89 { id: number; ten: string; con: T89[]; the: Record<string, number> }
export type U89<K extends keyof T89> = { [P in K]: T89[P] extends number ? string : T89[P] };
export function f89(x: T89, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f89(c, 1);
  s += f86({ id: s, ten: 'a', con: [], the: {} } as T86);s += f12({ id: s, ten: 'a', con: [], the: {} } as T12);s += f48({ id: s, ten: 'a', con: [], the: {} } as T48);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g89 = <K extends keyof T89>(o: T89, k: K): U89<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U89<K>[K];
