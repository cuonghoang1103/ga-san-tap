import { f123, T123 } from './m123';
import { f48, T48 } from './m048';
import { f347, T347 } from './m347';
export interface T501 { id: number; ten: string; con: T501[]; the: Record<string, number> }
export type U501<K extends keyof T501> = { [P in K]: T501[P] extends number ? string : T501[P] };
export function f501(x: T501, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f501(c, 1);
  s += f123({ id: s, ten: 'a', con: [], the: {} } as T123);s += f48({ id: s, ten: 'a', con: [], the: {} } as T48);s += f347({ id: s, ten: 'a', con: [], the: {} } as T347);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g501 = <K extends keyof T501>(o: T501, k: K): U501<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U501<K>[K];
