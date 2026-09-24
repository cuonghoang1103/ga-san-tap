import { f54, T54 } from './m054';
import { f101, T101 } from './m101';
import { f482, T482 } from './m482';
export interface T532 { id: number; ten: string; con: T532[]; the: Record<string, number> }
export type U532<K extends keyof T532> = { [P in K]: T532[P] extends number ? string : T532[P] };
export function f532(x: T532, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f532(c, 1);
  s += f54({ id: s, ten: 'a', con: [], the: {} } as T54);s += f101({ id: s, ten: 'a', con: [], the: {} } as T101);s += f482({ id: s, ten: 'a', con: [], the: {} } as T482);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g532 = <K extends keyof T532>(o: T532, k: K): U532<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U532<K>[K];
