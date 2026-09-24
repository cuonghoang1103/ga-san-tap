import { f58, T58 } from './m058';
import { f128, T128 } from './m128';
import { f460, T460 } from './m460';
export interface T491 { id: number; ten: string; con: T491[]; the: Record<string, number> }
export type U491<K extends keyof T491> = { [P in K]: T491[P] extends number ? string : T491[P] };
export function f491(x: T491, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f491(c, 1);
  s += f58({ id: s, ten: 'a', con: [], the: {} } as T58);s += f128({ id: s, ten: 'a', con: [], the: {} } as T128);s += f460({ id: s, ten: 'a', con: [], the: {} } as T460);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g491 = <K extends keyof T491>(o: T491, k: K): U491<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U491<K>[K];
