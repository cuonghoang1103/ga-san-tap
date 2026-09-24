import { f251, T251 } from './m251';
import { f294, T294 } from './m294';
import { f128, T128 } from './m128';
export interface T355 { id: number; ten: string; con: T355[]; the: Record<string, number> }
export type U355<K extends keyof T355> = { [P in K]: T355[P] extends number ? string : T355[P] };
export function f355(x: T355, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f355(c, 1);
  s += f251({ id: s, ten: 'a', con: [], the: {} } as T251);s += f294({ id: s, ten: 'a', con: [], the: {} } as T294);s += f128({ id: s, ten: 'a', con: [], the: {} } as T128);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g355 = <K extends keyof T355>(o: T355, k: K): U355<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U355<K>[K];
