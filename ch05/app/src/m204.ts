import { f1, T1 } from './m001';
import { f48, T48 } from './m048';
import { f135, T135 } from './m135';
export interface T204 { id: number; ten: string; con: T204[]; the: Record<string, number> }
export type U204<K extends keyof T204> = { [P in K]: T204[P] extends number ? string : T204[P] };
export function f204(x: T204, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f204(c, 1);
  s += f1({ id: s, ten: 'a', con: [], the: {} } as T1);s += f48({ id: s, ten: 'a', con: [], the: {} } as T48);s += f135({ id: s, ten: 'a', con: [], the: {} } as T135);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g204 = <K extends keyof T204>(o: T204, k: K): U204<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U204<K>[K];
