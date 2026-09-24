import { f427, T427 } from './m427';
import { f311, T311 } from './m311';
import { f260, T260 } from './m260';
export interface T458 { id: number; ten: string; con: T458[]; the: Record<string, number> }
export type U458<K extends keyof T458> = { [P in K]: T458[P] extends number ? string : T458[P] };
export function f458(x: T458, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f458(c, 1);
  s += f427({ id: s, ten: 'a', con: [], the: {} } as T427);s += f311({ id: s, ten: 'a', con: [], the: {} } as T311);s += f260({ id: s, ten: 'a', con: [], the: {} } as T260);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g458 = <K extends keyof T458>(o: T458, k: K): U458<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U458<K>[K];
