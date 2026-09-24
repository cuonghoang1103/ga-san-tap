import { f230, T230 } from './m230';
import { f273, T273 } from './m273';
import { f76, T76 } from './m076';
export interface T467 { id: number; ten: string; con: T467[]; the: Record<string, number> }
export type U467<K extends keyof T467> = { [P in K]: T467[P] extends number ? string : T467[P] };
export function f467(x: T467, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f467(c, 1);
  s += f230({ id: s, ten: 'a', con: [], the: {} } as T230);s += f273({ id: s, ten: 'a', con: [], the: {} } as T273);s += f76({ id: s, ten: 'a', con: [], the: {} } as T76);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g467 = <K extends keyof T467>(o: T467, k: K): U467<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U467<K>[K];
