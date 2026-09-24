import { f20, T20 } from './m020';
import { f25, T25 } from './m025';
import { f41, T41 } from './m041';
export interface T86 { id: number; ten: string; con: T86[]; the: Record<string, number> }
export type U86<K extends keyof T86> = { [P in K]: T86[P] extends number ? string : T86[P] };
export function f86(x: T86, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f86(c, 1);
  s += f20({ id: s, ten: 'a', con: [], the: {} } as T20);s += f25({ id: s, ten: 'a', con: [], the: {} } as T25);s += f41({ id: s, ten: 'a', con: [], the: {} } as T41);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g86 = <K extends keyof T86>(o: T86, k: K): U86<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U86<K>[K];
