import { f221, T221 } from './m221';
import { f11, T11 } from './m011';
import { f302, T302 } from './m302';
export interface T371 { id: number; ten: string; con: T371[]; the: Record<string, number> }
export type U371<K extends keyof T371> = { [P in K]: T371[P] extends number ? string : T371[P] };
export function f371(x: T371, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f371(c, 1);
  s += f221({ id: s, ten: 'a', con: [], the: {} } as T221);s += f11({ id: s, ten: 'a', con: [], the: {} } as T11);s += f302({ id: s, ten: 'a', con: [], the: {} } as T302);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g371 = <K extends keyof T371>(o: T371, k: K): U371<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U371<K>[K];
