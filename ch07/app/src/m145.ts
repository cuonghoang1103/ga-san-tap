import { f2, T2 } from './m002';
import { f74, T74 } from './m074';
import { f91, T91 } from './m091';
export interface T145 { id: number; ten: string; con: T145[]; the: Record<string, number> }
export type U145<K extends keyof T145> = { [P in K]: T145[P] extends number ? string : T145[P] };
export function f145(x: T145, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f145(c, 1);
  s += f2({ id: s, ten: 'a', con: [], the: {} } as T2);s += f74({ id: s, ten: 'a', con: [], the: {} } as T74);s += f91({ id: s, ten: 'a', con: [], the: {} } as T91);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g145 = <K extends keyof T145>(o: T145, k: K): U145<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U145<K>[K];
