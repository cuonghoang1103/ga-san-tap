import { f390, T390 } from './m390';
import { f450, T450 } from './m450';
import { f415, T415 } from './m415';
export interface T525 { id: number; ten: string; con: T525[]; the: Record<string, number> }
export type U525<K extends keyof T525> = { [P in K]: T525[P] extends number ? string : T525[P] };
export function f525(x: T525, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f525(c, 1);
  s += f390({ id: s, ten: 'a', con: [], the: {} } as T390);s += f450({ id: s, ten: 'a', con: [], the: {} } as T450);s += f415({ id: s, ten: 'a', con: [], the: {} } as T415);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g525 = <K extends keyof T525>(o: T525, k: K): U525<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U525<K>[K];
