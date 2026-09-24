import { f440, T440 } from './m440';
import { f174, T174 } from './m174';
import { f137, T137 } from './m137';
export interface T487 { id: number; ten: string; con: T487[]; the: Record<string, number> }
export type U487<K extends keyof T487> = { [P in K]: T487[P] extends number ? string : T487[P] };
export function f487(x: T487, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f487(c, 1);
  s += f440({ id: s, ten: 'a', con: [], the: {} } as T440);s += f174({ id: s, ten: 'a', con: [], the: {} } as T174);s += f137({ id: s, ten: 'a', con: [], the: {} } as T137);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g487 = <K extends keyof T487>(o: T487, k: K): U487<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U487<K>[K];
