import { f63, T63 } from './m063';
import { f13, T13 } from './m013';
import { f49, T49 } from './m049';
export interface T82 { id: number; ten: string; con: T82[]; the: Record<string, number> }
export type U82<K extends keyof T82> = { [P in K]: T82[P] extends number ? string : T82[P] };
export function f82(x: T82, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f82(c, 1);
  s += f63({ id: s, ten: 'a', con: [], the: {} } as T63);s += f13({ id: s, ten: 'a', con: [], the: {} } as T13);s += f49({ id: s, ten: 'a', con: [], the: {} } as T49);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g82 = <K extends keyof T82>(o: T82, k: K): U82<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U82<K>[K];
