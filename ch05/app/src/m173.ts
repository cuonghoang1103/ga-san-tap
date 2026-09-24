import { f122, T122 } from './m122';
import { f57, T57 } from './m057';
import { f105, T105 } from './m105';
export interface T173 { id: number; ten: string; con: T173[]; the: Record<string, number> }
export type U173<K extends keyof T173> = { [P in K]: T173[P] extends number ? string : T173[P] };
export function f173(x: T173, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f173(c, 1);
  s += f122({ id: s, ten: 'a', con: [], the: {} } as T122);s += f57({ id: s, ten: 'a', con: [], the: {} } as T57);s += f105({ id: s, ten: 'a', con: [], the: {} } as T105);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g173 = <K extends keyof T173>(o: T173, k: K): U173<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U173<K>[K];
