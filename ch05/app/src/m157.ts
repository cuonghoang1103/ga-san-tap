import { f16, T16 } from './m016';
import { f114, T114 } from './m114';
import { f110, T110 } from './m110';
export interface T157 { id: number; ten: string; con: T157[]; the: Record<string, number> }
export type U157<K extends keyof T157> = { [P in K]: T157[P] extends number ? string : T157[P] };
export function f157(x: T157, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f157(c, 1);
  s += f16({ id: s, ten: 'a', con: [], the: {} } as T16);s += f114({ id: s, ten: 'a', con: [], the: {} } as T114);s += f110({ id: s, ten: 'a', con: [], the: {} } as T110);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g157 = <K extends keyof T157>(o: T157, k: K): U157<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U157<K>[K];
