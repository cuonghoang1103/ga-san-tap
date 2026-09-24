import { f18, T18 } from './m018';
import { f4, T4 } from './m004';
import { f20, T20 } from './m020';
export interface T66 { id: number; ten: string; con: T66[]; the: Record<string, number> }
export type U66<K extends keyof T66> = { [P in K]: T66[P] extends number ? string : T66[P] };
export function f66(x: T66, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f66(c, 1);
  s += f18({ id: s, ten: 'a', con: [], the: {} } as T18);s += f4({ id: s, ten: 'a', con: [], the: {} } as T4);s += f20({ id: s, ten: 'a', con: [], the: {} } as T20);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g66 = <K extends keyof T66>(o: T66, k: K): U66<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U66<K>[K];
