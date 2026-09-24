import { f16, T16 } from './m016';
import { f81, T81 } from './m081';
import { f116, T116 } from './m116';
export interface T130 { id: number; ten: string; con: T130[]; the: Record<string, number> }
export type U130<K extends keyof T130> = { [P in K]: T130[P] extends number ? string : T130[P] };
export function f130(x: T130, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f130(c, 1);
  s += f16({ id: s, ten: 'a', con: [], the: {} } as T16);s += f81({ id: s, ten: 'a', con: [], the: {} } as T81);s += f116({ id: s, ten: 'a', con: [], the: {} } as T116);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g130 = <K extends keyof T130>(o: T130, k: K): U130<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U130<K>[K];
