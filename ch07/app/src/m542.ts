import { f451, T451 } from './m451';
import { f243, T243 } from './m243';
import { f531, T531 } from './m531';
export interface T542 { id: number; ten: string; con: T542[]; the: Record<string, number> }
export type U542<K extends keyof T542> = { [P in K]: T542[P] extends number ? string : T542[P] };
export function f542(x: T542, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f542(c, 1);
  s += f451({ id: s, ten: 'a', con: [], the: {} } as T451);s += f243({ id: s, ten: 'a', con: [], the: {} } as T243);s += f531({ id: s, ten: 'a', con: [], the: {} } as T531);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g542 = <K extends keyof T542>(o: T542, k: K): U542<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U542<K>[K];
