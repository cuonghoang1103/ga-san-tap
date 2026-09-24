import { f20, T20 } from './m020';
import { f53, T53 } from './m053';
import { f72, T72 } from './m072';
export interface T74 { id: number; ten: string; con: T74[]; the: Record<string, number> }
export type U74<K extends keyof T74> = { [P in K]: T74[P] extends number ? string : T74[P] };
export function f74(x: T74, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f74(c, 1);
  s += f20({ id: s, ten: 'a', con: [], the: {} } as T20);s += f53({ id: s, ten: 'a', con: [], the: {} } as T53);s += f72({ id: s, ten: 'a', con: [], the: {} } as T72);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g74 = <K extends keyof T74>(o: T74, k: K): U74<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U74<K>[K];
