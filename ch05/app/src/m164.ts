import { f148, T148 } from './m148';
import { f35, T35 } from './m035';
import { f151, T151 } from './m151';
export interface T164 { id: number; ten: string; con: T164[]; the: Record<string, number> }
export type U164<K extends keyof T164> = { [P in K]: T164[P] extends number ? string : T164[P] };
export function f164(x: T164, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f164(c, 1);
  s += f148({ id: s, ten: 'a', con: [], the: {} } as T148);s += f35({ id: s, ten: 'a', con: [], the: {} } as T35);s += f151({ id: s, ten: 'a', con: [], the: {} } as T151);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g164 = <K extends keyof T164>(o: T164, k: K): U164<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U164<K>[K];
