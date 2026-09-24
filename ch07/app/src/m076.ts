import { f71, T71 } from './m071';
import { f4, T4 } from './m004';
import { f75, T75 } from './m075';
export interface T76 { id: number; ten: string; con: T76[]; the: Record<string, number> }
export type U76<K extends keyof T76> = { [P in K]: T76[P] extends number ? string : T76[P] };
export function f76(x: T76, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f76(c, 1);
  s += f71({ id: s, ten: 'a', con: [], the: {} } as T71);s += f4({ id: s, ten: 'a', con: [], the: {} } as T4);s += f75({ id: s, ten: 'a', con: [], the: {} } as T75);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g76 = <K extends keyof T76>(o: T76, k: K): U76<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U76<K>[K];
