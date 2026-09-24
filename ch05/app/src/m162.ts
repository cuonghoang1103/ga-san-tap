import { f6, T6 } from './m006';
import { f106, T106 } from './m106';
import { f146, T146 } from './m146';
export interface T162 { id: number; ten: string; con: T162[]; the: Record<string, number> }
export type U162<K extends keyof T162> = { [P in K]: T162[P] extends number ? string : T162[P] };
export function f162(x: T162, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f162(c, 1);
  s += f6({ id: s, ten: 'a', con: [], the: {} } as T6);s += f106({ id: s, ten: 'a', con: [], the: {} } as T106);s += f146({ id: s, ten: 'a', con: [], the: {} } as T146);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g162 = <K extends keyof T162>(o: T162, k: K): U162<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U162<K>[K];
