import { f229, T229 } from './m229';
import { f268, T268 } from './m268';
import { f286, T286 } from './m286';
export interface T337 { id: number; ten: string; con: T337[]; the: Record<string, number> }
export type U337<K extends keyof T337> = { [P in K]: T337[P] extends number ? string : T337[P] };
export function f337(x: T337, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f337(c, 1);
  s += f229({ id: s, ten: 'a', con: [], the: {} } as T229);s += f268({ id: s, ten: 'a', con: [], the: {} } as T268);s += f286({ id: s, ten: 'a', con: [], the: {} } as T286);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g337 = <K extends keyof T337>(o: T337, k: K): U337<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U337<K>[K];
