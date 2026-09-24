import { f101, T101 } from './m101';
import { f42, T42 } from './m042';
import { f83, T83 } from './m083';
export interface T197 { id: number; ten: string; con: T197[]; the: Record<string, number> }
export type U197<K extends keyof T197> = { [P in K]: T197[P] extends number ? string : T197[P] };
export function f197(x: T197, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f197(c, 1);
  s += f101({ id: s, ten: 'a', con: [], the: {} } as T101);s += f42({ id: s, ten: 'a', con: [], the: {} } as T42);s += f83({ id: s, ten: 'a', con: [], the: {} } as T83);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g197 = <K extends keyof T197>(o: T197, k: K): U197<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U197<K>[K];
