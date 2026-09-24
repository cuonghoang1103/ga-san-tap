import { f44, T44 } from './m044';
import { f72, T72 } from './m072';
import { f37, T37 } from './m037';
export interface T208 { id: number; ten: string; con: T208[]; the: Record<string, number> }
export type U208<K extends keyof T208> = { [P in K]: T208[P] extends number ? string : T208[P] };
export function f208(x: T208, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f208(c, 1);
  s += f44({ id: s, ten: 'a', con: [], the: {} } as T44);s += f72({ id: s, ten: 'a', con: [], the: {} } as T72);s += f37({ id: s, ten: 'a', con: [], the: {} } as T37);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g208 = <K extends keyof T208>(o: T208, k: K): U208<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U208<K>[K];
