import { f76, T76 } from './m076';
import { f162, T162 } from './m162';
import { f166, T166 } from './m166';
export interface T349 { id: number; ten: string; con: T349[]; the: Record<string, number> }
export type U349<K extends keyof T349> = { [P in K]: T349[P] extends number ? string : T349[P] };
export function f349(x: T349, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f349(c, 1);
  s += f76({ id: s, ten: 'a', con: [], the: {} } as T76);s += f162({ id: s, ten: 'a', con: [], the: {} } as T162);s += f166({ id: s, ten: 'a', con: [], the: {} } as T166);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g349 = <K extends keyof T349>(o: T349, k: K): U349<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U349<K>[K];
