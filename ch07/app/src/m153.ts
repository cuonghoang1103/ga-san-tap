import { f8, T8 } from './m008';
import { f80, T80 } from './m080';
import { f141, T141 } from './m141';
export interface T153 { id: number; ten: string; con: T153[]; the: Record<string, number> }
export type U153<K extends keyof T153> = { [P in K]: T153[P] extends number ? string : T153[P] };
export function f153(x: T153, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f153(c, 1);
  s += f8({ id: s, ten: 'a', con: [], the: {} } as T8);s += f80({ id: s, ten: 'a', con: [], the: {} } as T80);s += f141({ id: s, ten: 'a', con: [], the: {} } as T141);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g153 = <K extends keyof T153>(o: T153, k: K): U153<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U153<K>[K];
