import { f126, T126 } from './m126';
import { f210, T210 } from './m210';
import { f75, T75 } from './m075';
export interface T454 { id: number; ten: string; con: T454[]; the: Record<string, number> }
export type U454<K extends keyof T454> = { [P in K]: T454[P] extends number ? string : T454[P] };
export function f454(x: T454, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f454(c, 1);
  s += f126({ id: s, ten: 'a', con: [], the: {} } as T126);s += f210({ id: s, ten: 'a', con: [], the: {} } as T210);s += f75({ id: s, ten: 'a', con: [], the: {} } as T75);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g454 = <K extends keyof T454>(o: T454, k: K): U454<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U454<K>[K];
