import { f40, T40 } from './m040';
import { f71, T71 } from './m071';
import { f473, T473 } from './m473';
export interface T498 { id: number; ten: string; con: T498[]; the: Record<string, number> }
export type U498<K extends keyof T498> = { [P in K]: T498[P] extends number ? string : T498[P] };
export function f498(x: T498, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f498(c, 1);
  s += f40({ id: s, ten: 'a', con: [], the: {} } as T40);s += f71({ id: s, ten: 'a', con: [], the: {} } as T71);s += f473({ id: s, ten: 'a', con: [], the: {} } as T473);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g498 = <K extends keyof T498>(o: T498, k: K): U498<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U498<K>[K];
