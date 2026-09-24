import { f450, T450 } from './m450';
import { f297, T297 } from './m297';
import { f355, T355 } from './m355';
export interface T466 { id: number; ten: string; con: T466[]; the: Record<string, number> }
export type U466<K extends keyof T466> = { [P in K]: T466[P] extends number ? string : T466[P] };
export function f466(x: T466, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f466(c, 1);
  s += f450({ id: s, ten: 'a', con: [], the: {} } as T450);s += f297({ id: s, ten: 'a', con: [], the: {} } as T297);s += f355({ id: s, ten: 'a', con: [], the: {} } as T355);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g466 = <K extends keyof T466>(o: T466, k: K): U466<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U466<K>[K];
