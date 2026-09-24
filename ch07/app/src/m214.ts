import { f107, T107 } from './m107';
import { f31, T31 } from './m031';
import { f196, T196 } from './m196';
export interface T214 { id: number; ten: string; con: T214[]; the: Record<string, number> }
export type U214<K extends keyof T214> = { [P in K]: T214[P] extends number ? string : T214[P] };
export function f214(x: T214, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f214(c, 1);
  s += f107({ id: s, ten: 'a', con: [], the: {} } as T107);s += f31({ id: s, ten: 'a', con: [], the: {} } as T31);s += f196({ id: s, ten: 'a', con: [], the: {} } as T196);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g214 = <K extends keyof T214>(o: T214, k: K): U214<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U214<K>[K];
