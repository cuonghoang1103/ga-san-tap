import { f157, T157 } from './m157';
import { f168, T168 } from './m168';
import { f175, T175 } from './m175';
export interface T194 { id: number; ten: string; con: T194[]; the: Record<string, number> }
export type U194<K extends keyof T194> = { [P in K]: T194[P] extends number ? string : T194[P] };
export function f194(x: T194, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f194(c, 1);
  s += f157({ id: s, ten: 'a', con: [], the: {} } as T157);s += f168({ id: s, ten: 'a', con: [], the: {} } as T168);s += f175({ id: s, ten: 'a', con: [], the: {} } as T175);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g194 = <K extends keyof T194>(o: T194, k: K): U194<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U194<K>[K];
