import { f296, T296 } from './m296';
import { f299, T299 } from './m299';
import { f217, T217 } from './m217';
export interface T382 { id: number; ten: string; con: T382[]; the: Record<string, number> }
export type U382<K extends keyof T382> = { [P in K]: T382[P] extends number ? string : T382[P] };
export function f382(x: T382, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f382(c, 1);
  s += f296({ id: s, ten: 'a', con: [], the: {} } as T296);s += f299({ id: s, ten: 'a', con: [], the: {} } as T299);s += f217({ id: s, ten: 'a', con: [], the: {} } as T217);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g382 = <K extends keyof T382>(o: T382, k: K): U382<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U382<K>[K];
