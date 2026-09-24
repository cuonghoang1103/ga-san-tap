import { f168, T168 } from './m168';
import { f60, T60 } from './m060';
import { f65, T65 } from './m065';
export interface T473 { id: number; ten: string; con: T473[]; the: Record<string, number> }
export type U473<K extends keyof T473> = { [P in K]: T473[P] extends number ? string : T473[P] };
export function f473(x: T473, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f473(c, 1);
  s += f168({ id: s, ten: 'a', con: [], the: {} } as T168);s += f60({ id: s, ten: 'a', con: [], the: {} } as T60);s += f65({ id: s, ten: 'a', con: [], the: {} } as T65);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g473 = <K extends keyof T473>(o: T473, k: K): U473<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U473<K>[K];
