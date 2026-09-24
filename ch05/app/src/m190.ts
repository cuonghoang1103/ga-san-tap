import { f139, T139 } from './m139';
import { f186, T186 } from './m186';
import { f10, T10 } from './m010';
export interface T190 { id: number; ten: string; con: T190[]; the: Record<string, number> }
export type U190<K extends keyof T190> = { [P in K]: T190[P] extends number ? string : T190[P] };
export function f190(x: T190, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f190(c, 1);
  s += f139({ id: s, ten: 'a', con: [], the: {} } as T139);s += f186({ id: s, ten: 'a', con: [], the: {} } as T186);s += f10({ id: s, ten: 'a', con: [], the: {} } as T10);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g190 = <K extends keyof T190>(o: T190, k: K): U190<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U190<K>[K];
