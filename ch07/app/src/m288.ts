import { f113, T113 } from './m113';
import { f204, T204 } from './m204';
import { f119, T119 } from './m119';
export interface T288 { id: number; ten: string; con: T288[]; the: Record<string, number> }
export type U288<K extends keyof T288> = { [P in K]: T288[P] extends number ? string : T288[P] };
export function f288(x: T288, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f288(c, 1);
  s += f113({ id: s, ten: 'a', con: [], the: {} } as T113);s += f204({ id: s, ten: 'a', con: [], the: {} } as T204);s += f119({ id: s, ten: 'a', con: [], the: {} } as T119);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g288 = <K extends keyof T288>(o: T288, k: K): U288<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U288<K>[K];
