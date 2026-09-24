import { f20, T20 } from './m020';
import { f71, T71 } from './m071';
import { f22, T22 } from './m022';
export interface T135 { id: number; ten: string; con: T135[]; the: Record<string, number> }
export type U135<K extends keyof T135> = { [P in K]: T135[P] extends number ? string : T135[P] };
export function f135(x: T135, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f135(c, 1);
  s += f20({ id: s, ten: 'a', con: [], the: {} } as T20);s += f71({ id: s, ten: 'a', con: [], the: {} } as T71);s += f22({ id: s, ten: 'a', con: [], the: {} } as T22);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g135 = <K extends keyof T135>(o: T135, k: K): U135<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U135<K>[K];
