import { f247, T247 } from './m247';
import { f132, T132 } from './m132';
import { f168, T168 } from './m168';
export interface T271 { id: number; ten: string; con: T271[]; the: Record<string, number> }
export type U271<K extends keyof T271> = { [P in K]: T271[P] extends number ? string : T271[P] };
export function f271(x: T271, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f271(c, 1);
  s += f247({ id: s, ten: 'a', con: [], the: {} } as T247);s += f132({ id: s, ten: 'a', con: [], the: {} } as T132);s += f168({ id: s, ten: 'a', con: [], the: {} } as T168);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g271 = <K extends keyof T271>(o: T271, k: K): U271<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U271<K>[K];
