import { f31, T31 } from './m031';
import { f30, T30 } from './m030';
import { f7, T7 } from './m007';
export interface T60 { id: number; ten: string; con: T60[]; the: Record<string, number> }
export type U60<K extends keyof T60> = { [P in K]: T60[P] extends number ? string : T60[P] };
export function f60(x: T60, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f60(c, 1);
  s += f31({ id: s, ten: 'a', con: [], the: {} } as T31);s += f30({ id: s, ten: 'a', con: [], the: {} } as T30);s += f7({ id: s, ten: 'a', con: [], the: {} } as T7);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g60 = <K extends keyof T60>(o: T60, k: K): U60<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U60<K>[K];
