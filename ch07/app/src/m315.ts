import { f211, T211 } from './m211';
import { f275, T275 } from './m275';
import { f102, T102 } from './m102';
export interface T315 { id: number; ten: string; con: T315[]; the: Record<string, number> }
export type U315<K extends keyof T315> = { [P in K]: T315[P] extends number ? string : T315[P] };
export function f315(x: T315, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f315(c, 1);
  s += f211({ id: s, ten: 'a', con: [], the: {} } as T211);s += f275({ id: s, ten: 'a', con: [], the: {} } as T275);s += f102({ id: s, ten: 'a', con: [], the: {} } as T102);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g315 = <K extends keyof T315>(o: T315, k: K): U315<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U315<K>[K];
