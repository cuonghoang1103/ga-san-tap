import { f14, T14 } from './m014';
import { f255, T255 } from './m255';
import { f66, T66 } from './m066';
export interface T307 { id: number; ten: string; con: T307[]; the: Record<string, number> }
export type U307<K extends keyof T307> = { [P in K]: T307[P] extends number ? string : T307[P] };
export function f307(x: T307, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f307(c, 1);
  s += f14({ id: s, ten: 'a', con: [], the: {} } as T14);s += f255({ id: s, ten: 'a', con: [], the: {} } as T255);s += f66({ id: s, ten: 'a', con: [], the: {} } as T66);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g307 = <K extends keyof T307>(o: T307, k: K): U307<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U307<K>[K];
