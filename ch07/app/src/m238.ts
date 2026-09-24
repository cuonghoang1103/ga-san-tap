import { f104, T104 } from './m104';
import { f190, T190 } from './m190';
import { f182, T182 } from './m182';
export interface T238 { id: number; ten: string; con: T238[]; the: Record<string, number> }
export type U238<K extends keyof T238> = { [P in K]: T238[P] extends number ? string : T238[P] };
export function f238(x: T238, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f238(c, 1);
  s += f104({ id: s, ten: 'a', con: [], the: {} } as T104);s += f190({ id: s, ten: 'a', con: [], the: {} } as T190);s += f182({ id: s, ten: 'a', con: [], the: {} } as T182);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g238 = <K extends keyof T238>(o: T238, k: K): U238<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U238<K>[K];
