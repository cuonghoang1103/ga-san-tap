import { f30, T30 } from './m030';
import { f145, T145 } from './m145';
import { f191, T191 } from './m191';
export interface T218 { id: number; ten: string; con: T218[]; the: Record<string, number> }
export type U218<K extends keyof T218> = { [P in K]: T218[P] extends number ? string : T218[P] };
export function f218(x: T218, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f218(c, 1);
  s += f30({ id: s, ten: 'a', con: [], the: {} } as T30);s += f145({ id: s, ten: 'a', con: [], the: {} } as T145);s += f191({ id: s, ten: 'a', con: [], the: {} } as T191);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g218 = <K extends keyof T218>(o: T218, k: K): U218<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U218<K>[K];
