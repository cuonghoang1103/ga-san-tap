import { f52, T52 } from './m052';
import { f9, T9 } from './m009';
import { f48, T48 } from './m048';
export interface T101 { id: number; ten: string; con: T101[]; the: Record<string, number> }
export type U101<K extends keyof T101> = { [P in K]: T101[P] extends number ? string : T101[P] };
export function f101(x: T101, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f101(c, 1);
  s += f52({ id: s, ten: 'a', con: [], the: {} } as T52);s += f9({ id: s, ten: 'a', con: [], the: {} } as T9);s += f48({ id: s, ten: 'a', con: [], the: {} } as T48);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g101 = <K extends keyof T101>(o: T101, k: K): U101<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U101<K>[K];
