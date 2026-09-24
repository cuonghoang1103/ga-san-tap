import { f75, T75 } from './m075';
import { f71, T71 } from './m071';
import { f63, T63 } from './m063';
export interface T202 { id: number; ten: string; con: T202[]; the: Record<string, number> }
export type U202<K extends keyof T202> = { [P in K]: T202[P] extends number ? string : T202[P] };
export function f202(x: T202, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f202(c, 1);
  s += f75({ id: s, ten: 'a', con: [], the: {} } as T75);s += f71({ id: s, ten: 'a', con: [], the: {} } as T71);s += f63({ id: s, ten: 'a', con: [], the: {} } as T63);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g202 = <K extends keyof T202>(o: T202, k: K): U202<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U202<K>[K];
