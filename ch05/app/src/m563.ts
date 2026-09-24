import { f162, T162 } from './m162';
import { f183, T183 } from './m183';
import { f350, T350 } from './m350';
export interface T563 { id: number; ten: string; con: T563[]; the: Record<string, number> }
export type U563<K extends keyof T563> = { [P in K]: T563[P] extends number ? string : T563[P] };
export function f563(x: T563, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f563(c, 1);
  s += f162({ id: s, ten: 'a', con: [], the: {} } as T162);s += f183({ id: s, ten: 'a', con: [], the: {} } as T183);s += f350({ id: s, ten: 'a', con: [], the: {} } as T350);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g563 = <K extends keyof T563>(o: T563, k: K): U563<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U563<K>[K];
