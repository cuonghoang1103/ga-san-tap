import { f51, T51 } from './m051';
import { f39, T39 } from './m039';
import { f11, T11 } from './m011';
export interface T54 { id: number; ten: string; con: T54[]; the: Record<string, number> }
export type U54<K extends keyof T54> = { [P in K]: T54[P] extends number ? string : T54[P] };
export function f54(x: T54, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f54(c, 1);
  s += f51({ id: s, ten: 'a', con: [], the: {} } as T51);s += f39({ id: s, ten: 'a', con: [], the: {} } as T39);s += f11({ id: s, ten: 'a', con: [], the: {} } as T11);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g54 = <K extends keyof T54>(o: T54, k: K): U54<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U54<K>[K];
