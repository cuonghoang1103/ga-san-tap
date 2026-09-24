import { f152, T152 } from './m152';
import { f133, T133 } from './m133';
import { f258, T258 } from './m258';
export interface T587 { id: number; ten: string; con: T587[]; the: Record<string, number> }
export type U587<K extends keyof T587> = { [P in K]: T587[P] extends number ? string : T587[P] };
export function f587(x: T587, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f587(c, 1);
  s += f152({ id: s, ten: 'a', con: [], the: {} } as T152);s += f133({ id: s, ten: 'a', con: [], the: {} } as T133);s += f258({ id: s, ten: 'a', con: [], the: {} } as T258);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g587 = <K extends keyof T587>(o: T587, k: K): U587<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U587<K>[K];
