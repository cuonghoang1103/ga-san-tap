import { f11, T11 } from './m011';
import { f2, T2 } from './m002';
import { f14, T14 } from './m014';
export interface T27 { id: number; ten: string; con: T27[]; the: Record<string, number> }
export type U27<K extends keyof T27> = { [P in K]: T27[P] extends number ? string : T27[P] };
export function f27(x: T27, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f27(c, 1);
  s += f11({ id: s, ten: 'a', con: [], the: {} } as T11);s += f2({ id: s, ten: 'a', con: [], the: {} } as T2);s += f14({ id: s, ten: 'a', con: [], the: {} } as T14);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g27 = <K extends keyof T27>(o: T27, k: K): U27<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U27<K>[K];
