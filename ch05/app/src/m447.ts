import { f52, T52 } from './m052';
import { f4, T4 } from './m004';
import { f387, T387 } from './m387';
export interface T447 { id: number; ten: string; con: T447[]; the: Record<string, number> }
export type U447<K extends keyof T447> = { [P in K]: T447[P] extends number ? string : T447[P] };
export function f447(x: T447, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f447(c, 1);
  s += f52({ id: s, ten: 'a', con: [], the: {} } as T52);s += f4({ id: s, ten: 'a', con: [], the: {} } as T4);s += f387({ id: s, ten: 'a', con: [], the: {} } as T387);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g447 = <K extends keyof T447>(o: T447, k: K): U447<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U447<K>[K];
