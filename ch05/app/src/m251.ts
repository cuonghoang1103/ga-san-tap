import { f161, T161 } from './m161';
import { f39, T39 } from './m039';
import { f162, T162 } from './m162';
export interface T251 { id: number; ten: string; con: T251[]; the: Record<string, number> }
export type U251<K extends keyof T251> = { [P in K]: T251[P] extends number ? string : T251[P] };
export function f251(x: T251, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f251(c, 1);
  s += f161({ id: s, ten: 'a', con: [], the: {} } as T161);s += f39({ id: s, ten: 'a', con: [], the: {} } as T39);s += f162({ id: s, ten: 'a', con: [], the: {} } as T162);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g251 = <K extends keyof T251>(o: T251, k: K): U251<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U251<K>[K];
