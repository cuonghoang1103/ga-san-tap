import { f11, T11 } from './m011';
import { f17, T17 } from './m017';
import { f22, T22 } from './m022';
export interface T25 { id: number; ten: string; con: T25[]; the: Record<string, number> }
export type U25<K extends keyof T25> = { [P in K]: T25[P] extends number ? string : T25[P] };
export function f25(x: T25, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f25(c, 1);
  s += f11({ id: s, ten: 'a', con: [], the: {} } as T11);s += f17({ id: s, ten: 'a', con: [], the: {} } as T17);s += f22({ id: s, ten: 'a', con: [], the: {} } as T22);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g25 = <K extends keyof T25>(o: T25, k: K): U25<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U25<K>[K];
