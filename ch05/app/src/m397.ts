import { f217, T217 } from './m217';
import { f376, T376 } from './m376';
import { f338, T338 } from './m338';
export interface T397 { id: number; ten: string; con: T397[]; the: Record<string, number> }
export type U397<K extends keyof T397> = { [P in K]: T397[P] extends number ? string : T397[P] };
export function f397(x: T397, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f397(c, 1);
  s += f217({ id: s, ten: 'a', con: [], the: {} } as T217);s += f376({ id: s, ten: 'a', con: [], the: {} } as T376);s += f338({ id: s, ten: 'a', con: [], the: {} } as T338);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g397 = <K extends keyof T397>(o: T397, k: K): U397<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U397<K>[K];
