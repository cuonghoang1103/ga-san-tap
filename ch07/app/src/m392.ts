import { f322, T322 } from './m322';
import { f297, T297 } from './m297';
import { f157, T157 } from './m157';
export interface T392 { id: number; ten: string; con: T392[]; the: Record<string, number> }
export type U392<K extends keyof T392> = { [P in K]: T392[P] extends number ? string : T392[P] };
export function f392(x: T392, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f392(c, 1);
  s += f322({ id: s, ten: 'a', con: [], the: {} } as T322);s += f297({ id: s, ten: 'a', con: [], the: {} } as T297);s += f157({ id: s, ten: 'a', con: [], the: {} } as T157);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g392 = <K extends keyof T392>(o: T392, k: K): U392<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U392<K>[K];
