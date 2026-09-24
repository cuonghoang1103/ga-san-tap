import { f53, T53 } from './m053';
import { f66, T66 } from './m066';
import { f334, T334 } from './m334';
export interface T336 { id: number; ten: string; con: T336[]; the: Record<string, number> }
export type U336<K extends keyof T336> = { [P in K]: T336[P] extends number ? string : T336[P] };
export function f336(x: T336, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f336(c, 1);
  s += f53({ id: s, ten: 'a', con: [], the: {} } as T53);s += f66({ id: s, ten: 'a', con: [], the: {} } as T66);s += f334({ id: s, ten: 'a', con: [], the: {} } as T334);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g336 = <K extends keyof T336>(o: T336, k: K): U336<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U336<K>[K];
