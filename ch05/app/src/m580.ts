import { f507, T507 } from './m507';
import { f285, T285 } from './m285';
import { f368, T368 } from './m368';
export interface T580 { id: number; ten: string; con: T580[]; the: Record<string, number> }
export type U580<K extends keyof T580> = { [P in K]: T580[P] extends number ? string : T580[P] };
export function f580(x: T580, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f580(c, 1);
  s += f507({ id: s, ten: 'a', con: [], the: {} } as T507);s += f285({ id: s, ten: 'a', con: [], the: {} } as T285);s += f368({ id: s, ten: 'a', con: [], the: {} } as T368);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g580 = <K extends keyof T580>(o: T580, k: K): U580<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U580<K>[K];
