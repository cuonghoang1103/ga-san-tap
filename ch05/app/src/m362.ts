import { f113, T113 } from './m113';
import { f288, T288 } from './m288';
import { f68, T68 } from './m068';
export interface T362 { id: number; ten: string; con: T362[]; the: Record<string, number> }
export type U362<K extends keyof T362> = { [P in K]: T362[P] extends number ? string : T362[P] };
export function f362(x: T362, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f362(c, 1);
  s += f113({ id: s, ten: 'a', con: [], the: {} } as T113);s += f288({ id: s, ten: 'a', con: [], the: {} } as T288);s += f68({ id: s, ten: 'a', con: [], the: {} } as T68);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g362 = <K extends keyof T362>(o: T362, k: K): U362<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U362<K>[K];
