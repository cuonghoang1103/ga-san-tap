import { f10, T10 } from './m010';
import { f83, T83 } from './m083';
import { f47, T47 } from './m047';
export interface T138 { id: number; ten: string; con: T138[]; the: Record<string, number> }
export type U138<K extends keyof T138> = { [P in K]: T138[P] extends number ? string : T138[P] };
export function f138(x: T138, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f138(c, 1);
  s += f10({ id: s, ten: 'a', con: [], the: {} } as T10);s += f83({ id: s, ten: 'a', con: [], the: {} } as T83);s += f47({ id: s, ten: 'a', con: [], the: {} } as T47);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g138 = <K extends keyof T138>(o: T138, k: K): U138<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U138<K>[K];
