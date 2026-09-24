import { f110, T110 } from './m110';
import { f366, T366 } from './m366';
import { f251, T251 } from './m251';
export interface T415 { id: number; ten: string; con: T415[]; the: Record<string, number> }
export type U415<K extends keyof T415> = { [P in K]: T415[P] extends number ? string : T415[P] };
export function f415(x: T415, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f415(c, 1);
  s += f110({ id: s, ten: 'a', con: [], the: {} } as T110);s += f366({ id: s, ten: 'a', con: [], the: {} } as T366);s += f251({ id: s, ten: 'a', con: [], the: {} } as T251);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g415 = <K extends keyof T415>(o: T415, k: K): U415<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U415<K>[K];
