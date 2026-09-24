import { f12, T12 } from './m012';
import { f18, T18 } from './m018';
import { f1, T1 } from './m001';
export interface T22 { id: number; ten: string; con: T22[]; the: Record<string, number> }
export type U22<K extends keyof T22> = { [P in K]: T22[P] extends number ? string : T22[P] };
export function f22(x: T22, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f22(c, 1);
  s += f12({ id: s, ten: 'a', con: [], the: {} } as T12);s += f18({ id: s, ten: 'a', con: [], the: {} } as T18);s += f1({ id: s, ten: 'a', con: [], the: {} } as T1);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g22 = <K extends keyof T22>(o: T22, k: K): U22<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U22<K>[K];
