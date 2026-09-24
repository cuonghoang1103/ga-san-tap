import { f79, T79 } from './m079';
import { f76, T76 } from './m076';
import { f177, T177 } from './m177';
export interface T179 { id: number; ten: string; con: T179[]; the: Record<string, number> }
export type U179<K extends keyof T179> = { [P in K]: T179[P] extends number ? string : T179[P] };
export function f179(x: T179, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f179(c, 1);
  s += f79({ id: s, ten: 'a', con: [], the: {} } as T79);s += f76({ id: s, ten: 'a', con: [], the: {} } as T76);s += f177({ id: s, ten: 'a', con: [], the: {} } as T177);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g179 = <K extends keyof T179>(o: T179, k: K): U179<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U179<K>[K];
