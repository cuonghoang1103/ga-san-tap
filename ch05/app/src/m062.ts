import { f21, T21 } from './m021';
import { f26, T26 } from './m026';
import { f50, T50 } from './m050';
export interface T62 { id: number; ten: string; con: T62[]; the: Record<string, number> }
export type U62<K extends keyof T62> = { [P in K]: T62[P] extends number ? string : T62[P] };
export function f62(x: T62, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f62(c, 1);
  s += f21({ id: s, ten: 'a', con: [], the: {} } as T21);s += f26({ id: s, ten: 'a', con: [], the: {} } as T26);s += f50({ id: s, ten: 'a', con: [], the: {} } as T50);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g62 = <K extends keyof T62>(o: T62, k: K): U62<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U62<K>[K];
