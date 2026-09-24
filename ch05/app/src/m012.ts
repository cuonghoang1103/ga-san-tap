import { f11, T11 } from './m011';
import { f0, T0 } from './m000';
import { f8, T8 } from './m008';
export interface T12 { id: number; ten: string; con: T12[]; the: Record<string, number> }
export type U12<K extends keyof T12> = { [P in K]: T12[P] extends number ? string : T12[P] };
export function f12(x: T12, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f12(c, 1);
  s += f11({ id: s, ten: 'a', con: [], the: {} } as T11);s += f0({ id: s, ten: 'a', con: [], the: {} } as T0);s += f8({ id: s, ten: 'a', con: [], the: {} } as T8);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g12 = <K extends keyof T12>(o: T12, k: K): U12<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U12<K>[K];
