import { f136, T136 } from './m136';
import { f312, T312 } from './m312';
import { f37, T37 } from './m037';
export interface T317 { id: number; ten: string; con: T317[]; the: Record<string, number> }
export type U317<K extends keyof T317> = { [P in K]: T317[P] extends number ? string : T317[P] };
export function f317(x: T317, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f317(c, 1);
  s += f136({ id: s, ten: 'a', con: [], the: {} } as T136);s += f312({ id: s, ten: 'a', con: [], the: {} } as T312);s += f37({ id: s, ten: 'a', con: [], the: {} } as T37);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g317 = <K extends keyof T317>(o: T317, k: K): U317<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U317<K>[K];
