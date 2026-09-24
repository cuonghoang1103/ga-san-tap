import { f519, T519 } from './m519';
import { f31, T31 } from './m031';
import { f315, T315 } from './m315';
export interface T520 { id: number; ten: string; con: T520[]; the: Record<string, number> }
export type U520<K extends keyof T520> = { [P in K]: T520[P] extends number ? string : T520[P] };
export function f520(x: T520, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f520(c, 1);
  s += f519({ id: s, ten: 'a', con: [], the: {} } as T519);s += f31({ id: s, ten: 'a', con: [], the: {} } as T31);s += f315({ id: s, ten: 'a', con: [], the: {} } as T315);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g520 = <K extends keyof T520>(o: T520, k: K): U520<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U520<K>[K];
