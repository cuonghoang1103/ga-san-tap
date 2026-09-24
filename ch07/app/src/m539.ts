import { f354, T354 } from './m354';
import { f259, T259 } from './m259';
import { f57, T57 } from './m057';
export interface T539 { id: number; ten: string; con: T539[]; the: Record<string, number> }
export type U539<K extends keyof T539> = { [P in K]: T539[P] extends number ? string : T539[P] };
export function f539(x: T539, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f539(c, 1);
  s += f354({ id: s, ten: 'a', con: [], the: {} } as T354);s += f259({ id: s, ten: 'a', con: [], the: {} } as T259);s += f57({ id: s, ten: 'a', con: [], the: {} } as T57);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g539 = <K extends keyof T539>(o: T539, k: K): U539<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U539<K>[K];
