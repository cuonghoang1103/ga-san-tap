import { f203, T203 } from './m203';
import { f164, T164 } from './m164';
import { f252, T252 } from './m252';
export interface T282 { id: number; ten: string; con: T282[]; the: Record<string, number> }
export type U282<K extends keyof T282> = { [P in K]: T282[P] extends number ? string : T282[P] };
export function f282(x: T282, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f282(c, 1);
  s += f203({ id: s, ten: 'a', con: [], the: {} } as T203);s += f164({ id: s, ten: 'a', con: [], the: {} } as T164);s += f252({ id: s, ten: 'a', con: [], the: {} } as T252);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g282 = <K extends keyof T282>(o: T282, k: K): U282<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U282<K>[K];
