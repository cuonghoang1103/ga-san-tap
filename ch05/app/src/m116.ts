import { f75, T75 } from './m075';
import { f53, T53 } from './m053';
import { f20, T20 } from './m020';
export interface T116 { id: number; ten: string; con: T116[]; the: Record<string, number> }
export type U116<K extends keyof T116> = { [P in K]: T116[P] extends number ? string : T116[P] };
export function f116(x: T116, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f116(c, 1);
  s += f75({ id: s, ten: 'a', con: [], the: {} } as T75);s += f53({ id: s, ten: 'a', con: [], the: {} } as T53);s += f20({ id: s, ten: 'a', con: [], the: {} } as T20);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g116 = <K extends keyof T116>(o: T116, k: K): U116<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U116<K>[K];
