import { f27, T27 } from './m027';
import { f72, T72 } from './m072';
import { f58, T58 } from './m058';
export interface T77 { id: number; ten: string; con: T77[]; the: Record<string, number> }
export type U77<K extends keyof T77> = { [P in K]: T77[P] extends number ? string : T77[P] };
export function f77(x: T77, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f77(c, 1);
  s += f27({ id: s, ten: 'a', con: [], the: {} } as T27);s += f72({ id: s, ten: 'a', con: [], the: {} } as T72);s += f58({ id: s, ten: 'a', con: [], the: {} } as T58);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g77 = <K extends keyof T77>(o: T77, k: K): U77<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U77<K>[K];
