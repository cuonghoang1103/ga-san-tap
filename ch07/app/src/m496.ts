import { f127, T127 } from './m127';
import { f137, T137 } from './m137';
import { f271, T271 } from './m271';
export interface T496 { id: number; ten: string; con: T496[]; the: Record<string, number> }
export type U496<K extends keyof T496> = { [P in K]: T496[P] extends number ? string : T496[P] };
export function f496(x: T496, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f496(c, 1);
  s += f127({ id: s, ten: 'a', con: [], the: {} } as T127);s += f137({ id: s, ten: 'a', con: [], the: {} } as T137);s += f271({ id: s, ten: 'a', con: [], the: {} } as T271);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g496 = <K extends keyof T496>(o: T496, k: K): U496<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U496<K>[K];
