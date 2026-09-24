import { f35, T35 } from './m035';
import { f37, T37 } from './m037';
import { f11, T11 } from './m011';
export interface T48 { id: number; ten: string; con: T48[]; the: Record<string, number> }
export type U48<K extends keyof T48> = { [P in K]: T48[P] extends number ? string : T48[P] };
export function f48(x: T48, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f48(c, 1);
  s += f35({ id: s, ten: 'a', con: [], the: {} } as T35);s += f37({ id: s, ten: 'a', con: [], the: {} } as T37);s += f11({ id: s, ten: 'a', con: [], the: {} } as T11);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g48 = <K extends keyof T48>(o: T48, k: K): U48<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U48<K>[K];
