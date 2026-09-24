import { f68, T68 } from './m068';
import { f62, T62 } from './m062';
import { f30, T30 } from './m030';
export interface T91 { id: number; ten: string; con: T91[]; the: Record<string, number> }
export type U91<K extends keyof T91> = { [P in K]: T91[P] extends number ? string : T91[P] };
export function f91(x: T91, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f91(c, 1);
  s += f68({ id: s, ten: 'a', con: [], the: {} } as T68);s += f62({ id: s, ten: 'a', con: [], the: {} } as T62);s += f30({ id: s, ten: 'a', con: [], the: {} } as T30);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g91 = <K extends keyof T91>(o: T91, k: K): U91<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U91<K>[K];
