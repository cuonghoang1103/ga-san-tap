import { f56, T56 } from './m056';
import { f12, T12 } from './m012';
import { f18, T18 } from './m018';
export interface T176 { id: number; ten: string; con: T176[]; the: Record<string, number> }
export type U176<K extends keyof T176> = { [P in K]: T176[P] extends number ? string : T176[P] };
export function f176(x: T176, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f176(c, 1);
  s += f56({ id: s, ten: 'a', con: [], the: {} } as T56);s += f12({ id: s, ten: 'a', con: [], the: {} } as T12);s += f18({ id: s, ten: 'a', con: [], the: {} } as T18);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g176 = <K extends keyof T176>(o: T176, k: K): U176<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U176<K>[K];
