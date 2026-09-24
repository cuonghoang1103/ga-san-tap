import { f24, T24 } from './m024';
import { f21, T21 } from './m021';
import { f23, T23 } from './m023';
export interface T26 { id: number; ten: string; con: T26[]; the: Record<string, number> }
export type U26<K extends keyof T26> = { [P in K]: T26[P] extends number ? string : T26[P] };
export function f26(x: T26, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f26(c, 1);
  s += f24({ id: s, ten: 'a', con: [], the: {} } as T24);s += f21({ id: s, ten: 'a', con: [], the: {} } as T21);s += f23({ id: s, ten: 'a', con: [], the: {} } as T23);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g26 = <K extends keyof T26>(o: T26, k: K): U26<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U26<K>[K];
