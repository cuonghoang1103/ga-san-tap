import { f50, T50 } from './m050';
import { f63, T63 } from './m063';
import { f92, T92 } from './m092';
export interface T134 { id: number; ten: string; con: T134[]; the: Record<string, number> }
export type U134<K extends keyof T134> = { [P in K]: T134[P] extends number ? string : T134[P] };
export function f134(x: T134, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f134(c, 1);
  s += f50({ id: s, ten: 'a', con: [], the: {} } as T50);s += f63({ id: s, ten: 'a', con: [], the: {} } as T63);s += f92({ id: s, ten: 'a', con: [], the: {} } as T92);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g134 = <K extends keyof T134>(o: T134, k: K): U134<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U134<K>[K];
