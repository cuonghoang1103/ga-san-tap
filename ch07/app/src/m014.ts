import { f8, T8 } from './m008';
import { f3, T3 } from './m003';
import { f5, T5 } from './m005';
export interface T14 { id: number; ten: string; con: T14[]; the: Record<string, number> }
export type U14<K extends keyof T14> = { [P in K]: T14[P] extends number ? string : T14[P] };
export function f14(x: T14, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f14(c, 1);
  s += f8({ id: s, ten: 'a', con: [], the: {} } as T8);s += f3({ id: s, ten: 'a', con: [], the: {} } as T3);s += f5({ id: s, ten: 'a', con: [], the: {} } as T5);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g14 = <K extends keyof T14>(o: T14, k: K): U14<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U14<K>[K];
