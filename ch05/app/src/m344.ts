import { f153, T153 } from './m153';
import { f333, T333 } from './m333';
import { f273, T273 } from './m273';
export interface T344 { id: number; ten: string; con: T344[]; the: Record<string, number> }
export type U344<K extends keyof T344> = { [P in K]: T344[P] extends number ? string : T344[P] };
export function f344(x: T344, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f344(c, 1);
  s += f153({ id: s, ten: 'a', con: [], the: {} } as T153);s += f333({ id: s, ten: 'a', con: [], the: {} } as T333);s += f273({ id: s, ten: 'a', con: [], the: {} } as T273);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g344 = <K extends keyof T344>(o: T344, k: K): U344<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U344<K>[K];
