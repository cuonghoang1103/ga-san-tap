import { f359, T359 } from './m359';
import { f25, T25 } from './m025';
import { f288, T288 } from './m288';
export interface T477 { id: number; ten: string; con: T477[]; the: Record<string, number> }
export type U477<K extends keyof T477> = { [P in K]: T477[P] extends number ? string : T477[P] };
export function f477(x: T477, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f477(c, 1);
  s += f359({ id: s, ten: 'a', con: [], the: {} } as T359);s += f25({ id: s, ten: 'a', con: [], the: {} } as T25);s += f288({ id: s, ten: 'a', con: [], the: {} } as T288);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g477 = <K extends keyof T477>(o: T477, k: K): U477<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U477<K>[K];
