import { f40, T40 } from './m040';
import { f37, T37 } from './m037';
import { f111, T111 } from './m111';
export interface T369 { id: number; ten: string; con: T369[]; the: Record<string, number> }
export type U369<K extends keyof T369> = { [P in K]: T369[P] extends number ? string : T369[P] };
export function f369(x: T369, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f369(c, 1);
  s += f40({ id: s, ten: 'a', con: [], the: {} } as T40);s += f37({ id: s, ten: 'a', con: [], the: {} } as T37);s += f111({ id: s, ten: 'a', con: [], the: {} } as T111);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g369 = <K extends keyof T369>(o: T369, k: K): U369<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U369<K>[K];
