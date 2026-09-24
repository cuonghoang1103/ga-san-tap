import { f19, T19 } from './m019';
import { f130, T130 } from './m130';
import { f44, T44 } from './m044';
export interface T148 { id: number; ten: string; con: T148[]; the: Record<string, number> }
export type U148<K extends keyof T148> = { [P in K]: T148[P] extends number ? string : T148[P] };
export function f148(x: T148, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f148(c, 1);
  s += f19({ id: s, ten: 'a', con: [], the: {} } as T19);s += f130({ id: s, ten: 'a', con: [], the: {} } as T130);s += f44({ id: s, ten: 'a', con: [], the: {} } as T44);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g148 = <K extends keyof T148>(o: T148, k: K): U148<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U148<K>[K];
