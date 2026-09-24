import { f48, T48 } from './m048';
import { f25, T25 } from './m025';
import { f44, T44 } from './m044';
export interface T79 { id: number; ten: string; con: T79[]; the: Record<string, number> }
export type U79<K extends keyof T79> = { [P in K]: T79[P] extends number ? string : T79[P] };
export function f79(x: T79, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f79(c, 1);
  s += f48({ id: s, ten: 'a', con: [], the: {} } as T48);s += f25({ id: s, ten: 'a', con: [], the: {} } as T25);s += f44({ id: s, ten: 'a', con: [], the: {} } as T44);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g79 = <K extends keyof T79>(o: T79, k: K): U79<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U79<K>[K];
