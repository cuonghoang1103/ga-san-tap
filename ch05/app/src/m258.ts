import { f236, T236 } from './m236';
import { f132, T132 } from './m132';
import { f248, T248 } from './m248';
export interface T258 { id: number; ten: string; con: T258[]; the: Record<string, number> }
export type U258<K extends keyof T258> = { [P in K]: T258[P] extends number ? string : T258[P] };
export function f258(x: T258, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f258(c, 1);
  s += f236({ id: s, ten: 'a', con: [], the: {} } as T236);s += f132({ id: s, ten: 'a', con: [], the: {} } as T132);s += f248({ id: s, ten: 'a', con: [], the: {} } as T248);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g258 = <K extends keyof T258>(o: T258, k: K): U258<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U258<K>[K];
