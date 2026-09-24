import { f168, T168 } from './m168';
import { f177, T177 } from './m177';
import { f71, T71 } from './m071';
export interface T490 { id: number; ten: string; con: T490[]; the: Record<string, number> }
export type U490<K extends keyof T490> = { [P in K]: T490[P] extends number ? string : T490[P] };
export function f490(x: T490, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f490(c, 1);
  s += f168({ id: s, ten: 'a', con: [], the: {} } as T168);s += f177({ id: s, ten: 'a', con: [], the: {} } as T177);s += f71({ id: s, ten: 'a', con: [], the: {} } as T71);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g490 = <K extends keyof T490>(o: T490, k: K): U490<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U490<K>[K];
