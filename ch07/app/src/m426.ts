import { f177, T177 } from './m177';
import { f24, T24 } from './m024';
import { f333, T333 } from './m333';
export interface T426 { id: number; ten: string; con: T426[]; the: Record<string, number> }
export type U426<K extends keyof T426> = { [P in K]: T426[P] extends number ? string : T426[P] };
export function f426(x: T426, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f426(c, 1);
  s += f177({ id: s, ten: 'a', con: [], the: {} } as T177);s += f24({ id: s, ten: 'a', con: [], the: {} } as T24);s += f333({ id: s, ten: 'a', con: [], the: {} } as T333);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g426 = <K extends keyof T426>(o: T426, k: K): U426<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U426<K>[K];
