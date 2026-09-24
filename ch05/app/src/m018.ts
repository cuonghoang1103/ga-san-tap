import { f9, T9 } from './m009';
import { f3, T3 } from './m003';
import { f10, T10 } from './m010';
export interface T18 { id: number; ten: string; con: T18[]; the: Record<string, number> }
export type U18<K extends keyof T18> = { [P in K]: T18[P] extends number ? string : T18[P] };
export function f18(x: T18, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f18(c, 1);
  s += f9({ id: s, ten: 'a', con: [], the: {} } as T9);s += f3({ id: s, ten: 'a', con: [], the: {} } as T3);s += f10({ id: s, ten: 'a', con: [], the: {} } as T10);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g18 = <K extends keyof T18>(o: T18, k: K): U18<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U18<K>[K];
