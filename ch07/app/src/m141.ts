import { f23, T23 } from './m023';
import { f62, T62 } from './m062';
import { f56, T56 } from './m056';
export interface T141 { id: number; ten: string; con: T141[]; the: Record<string, number> }
export type U141<K extends keyof T141> = { [P in K]: T141[P] extends number ? string : T141[P] };
export function f141(x: T141, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f141(c, 1);
  s += f23({ id: s, ten: 'a', con: [], the: {} } as T23);s += f62({ id: s, ten: 'a', con: [], the: {} } as T62);s += f56({ id: s, ten: 'a', con: [], the: {} } as T56);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g141 = <K extends keyof T141>(o: T141, k: K): U141<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U141<K>[K];
