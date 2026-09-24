import { f1, T1 } from './m001';
import { f19, T19 } from './m019';
import { f24, T24 } from './m024';
export interface T61 { id: number; ten: string; con: T61[]; the: Record<string, number> }
export type U61<K extends keyof T61> = { [P in K]: T61[P] extends number ? string : T61[P] };
export function f61(x: T61, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f61(c, 1);
  s += f1({ id: s, ten: 'a', con: [], the: {} } as T1);s += f19({ id: s, ten: 'a', con: [], the: {} } as T19);s += f24({ id: s, ten: 'a', con: [], the: {} } as T24);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g61 = <K extends keyof T61>(o: T61, k: K): U61<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U61<K>[K];
