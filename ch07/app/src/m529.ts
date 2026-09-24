import { f470, T470 } from './m470';
import { f31, T31 } from './m031';
import { f442, T442 } from './m442';
export interface T529 { id: number; ten: string; con: T529[]; the: Record<string, number> }
export type U529<K extends keyof T529> = { [P in K]: T529[P] extends number ? string : T529[P] };
export function f529(x: T529, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f529(c, 1);
  s += f470({ id: s, ten: 'a', con: [], the: {} } as T470);s += f31({ id: s, ten: 'a', con: [], the: {} } as T31);s += f442({ id: s, ten: 'a', con: [], the: {} } as T442);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g529 = <K extends keyof T529>(o: T529, k: K): U529<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U529<K>[K];
