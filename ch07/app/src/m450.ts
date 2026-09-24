import { f276, T276 } from './m276';
import { f320, T320 } from './m320';
import { f225, T225 } from './m225';
export interface T450 { id: number; ten: string; con: T450[]; the: Record<string, number> }
export type U450<K extends keyof T450> = { [P in K]: T450[P] extends number ? string : T450[P] };
export function f450(x: T450, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f450(c, 1);
  s += f276({ id: s, ten: 'a', con: [], the: {} } as T276);s += f320({ id: s, ten: 'a', con: [], the: {} } as T320);s += f225({ id: s, ten: 'a', con: [], the: {} } as T225);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g450 = <K extends keyof T450>(o: T450, k: K): U450<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U450<K>[K];
