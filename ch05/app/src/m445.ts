import { f403, T403 } from './m403';
import { f388, T388 } from './m388';
import { f319, T319 } from './m319';
export interface T445 { id: number; ten: string; con: T445[]; the: Record<string, number> }
export type U445<K extends keyof T445> = { [P in K]: T445[P] extends number ? string : T445[P] };
export function f445(x: T445, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f445(c, 1);
  s += f403({ id: s, ten: 'a', con: [], the: {} } as T403);s += f388({ id: s, ten: 'a', con: [], the: {} } as T388);s += f319({ id: s, ten: 'a', con: [], the: {} } as T319);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g445 = <K extends keyof T445>(o: T445, k: K): U445<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U445<K>[K];
