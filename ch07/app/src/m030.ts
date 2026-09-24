import { f26, T26 } from './m026';
import { f12, T12 } from './m012';
import { f11, T11 } from './m011';
export interface T30 { id: number; ten: string; con: T30[]; the: Record<string, number> }
export type U30<K extends keyof T30> = { [P in K]: T30[P] extends number ? string : T30[P] };
export function f30(x: T30, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f30(c, 1);
  s += f26({ id: s, ten: 'a', con: [], the: {} } as T26);s += f12({ id: s, ten: 'a', con: [], the: {} } as T12);s += f11({ id: s, ten: 'a', con: [], the: {} } as T11);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g30 = <K extends keyof T30>(o: T30, k: K): U30<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U30<K>[K];
