import { f366, T366 } from './m366';
import { f162, T162 } from './m162';
import { f119, T119 } from './m119';
export interface T537 { id: number; ten: string; con: T537[]; the: Record<string, number> }
export type U537<K extends keyof T537> = { [P in K]: T537[P] extends number ? string : T537[P] };
export function f537(x: T537, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f537(c, 1);
  s += f366({ id: s, ten: 'a', con: [], the: {} } as T366);s += f162({ id: s, ten: 'a', con: [], the: {} } as T162);s += f119({ id: s, ten: 'a', con: [], the: {} } as T119);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g537 = <K extends keyof T537>(o: T537, k: K): U537<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U537<K>[K];
