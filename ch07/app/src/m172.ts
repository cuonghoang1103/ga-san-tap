import { f61, T61 } from './m061';
import { f80, T80 } from './m080';
import { f126, T126 } from './m126';
export interface T172 { id: number; ten: string; con: T172[]; the: Record<string, number> }
export type U172<K extends keyof T172> = { [P in K]: T172[P] extends number ? string : T172[P] };
export function f172(x: T172, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f172(c, 1);
  s += f61({ id: s, ten: 'a', con: [], the: {} } as T61);s += f80({ id: s, ten: 'a', con: [], the: {} } as T80);s += f126({ id: s, ten: 'a', con: [], the: {} } as T126);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g172 = <K extends keyof T172>(o: T172, k: K): U172<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U172<K>[K];
