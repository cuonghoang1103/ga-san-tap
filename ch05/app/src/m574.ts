import { f21, T21 } from './m021';
import { f319, T319 } from './m319';
import { f477, T477 } from './m477';
export interface T574 { id: number; ten: string; con: T574[]; the: Record<string, number> }
export type U574<K extends keyof T574> = { [P in K]: T574[P] extends number ? string : T574[P] };
export function f574(x: T574, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f574(c, 1);
  s += f21({ id: s, ten: 'a', con: [], the: {} } as T21);s += f319({ id: s, ten: 'a', con: [], the: {} } as T319);s += f477({ id: s, ten: 'a', con: [], the: {} } as T477);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g574 = <K extends keyof T574>(o: T574, k: K): U574<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U574<K>[K];
