import { f83, T83 } from './m083';
import { f40, T40 } from './m040';
import { f5, T5 } from './m005';
export interface T125 { id: number; ten: string; con: T125[]; the: Record<string, number> }
export type U125<K extends keyof T125> = { [P in K]: T125[P] extends number ? string : T125[P] };
export function f125(x: T125, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f125(c, 1);
  s += f83({ id: s, ten: 'a', con: [], the: {} } as T83);s += f40({ id: s, ten: 'a', con: [], the: {} } as T40);s += f5({ id: s, ten: 'a', con: [], the: {} } as T5);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g125 = <K extends keyof T125>(o: T125, k: K): U125<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U125<K>[K];
