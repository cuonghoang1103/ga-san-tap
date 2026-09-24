import { f76, T76 } from './m076';
import { f141, T141 } from './m141';
import { f95, T95 } from './m095';
export interface T180 { id: number; ten: string; con: T180[]; the: Record<string, number> }
export type U180<K extends keyof T180> = { [P in K]: T180[P] extends number ? string : T180[P] };
export function f180(x: T180, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f180(c, 1);
  s += f76({ id: s, ten: 'a', con: [], the: {} } as T76);s += f141({ id: s, ten: 'a', con: [], the: {} } as T141);s += f95({ id: s, ten: 'a', con: [], the: {} } as T95);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g180 = <K extends keyof T180>(o: T180, k: K): U180<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U180<K>[K];
