import { f9, T9 } from './m009';
import { f73, T73 } from './m073';
import { f70, T70 } from './m070';
export interface T105 { id: number; ten: string; con: T105[]; the: Record<string, number> }
export type U105<K extends keyof T105> = { [P in K]: T105[P] extends number ? string : T105[P] };
export function f105(x: T105, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f105(c, 1);
  s += f9({ id: s, ten: 'a', con: [], the: {} } as T9);s += f73({ id: s, ten: 'a', con: [], the: {} } as T73);s += f70({ id: s, ten: 'a', con: [], the: {} } as T70);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g105 = <K extends keyof T105>(o: T105, k: K): U105<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U105<K>[K];
