import { f15, T15 } from './m015';
import { f17, T17 } from './m017';
import { f7, T7 } from './m007';
export interface T53 { id: number; ten: string; con: T53[]; the: Record<string, number> }
export type U53<K extends keyof T53> = { [P in K]: T53[P] extends number ? string : T53[P] };
export function f53(x: T53, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f53(c, 1);
  s += f15({ id: s, ten: 'a', con: [], the: {} } as T15);s += f17({ id: s, ten: 'a', con: [], the: {} } as T17);s += f7({ id: s, ten: 'a', con: [], the: {} } as T7);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g53 = <K extends keyof T53>(o: T53, k: K): U53<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U53<K>[K];
