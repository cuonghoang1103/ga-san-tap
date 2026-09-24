import { f179, T179 } from './m179';
import { f20, T20 } from './m020';
import { f113, T113 } from './m113';
export interface T195 { id: number; ten: string; con: T195[]; the: Record<string, number> }
export type U195<K extends keyof T195> = { [P in K]: T195[P] extends number ? string : T195[P] };
export function f195(x: T195, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f195(c, 1);
  s += f179({ id: s, ten: 'a', con: [], the: {} } as T179);s += f20({ id: s, ten: 'a', con: [], the: {} } as T20);s += f113({ id: s, ten: 'a', con: [], the: {} } as T113);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g195 = <K extends keyof T195>(o: T195, k: K): U195<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U195<K>[K];
