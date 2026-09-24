import { f103, T103 } from './m103';
import { f69, T69 } from './m069';
import { f116, T116 } from './m116';
export interface T121 { id: number; ten: string; con: T121[]; the: Record<string, number> }
export type U121<K extends keyof T121> = { [P in K]: T121[P] extends number ? string : T121[P] };
export function f121(x: T121, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f121(c, 1);
  s += f103({ id: s, ten: 'a', con: [], the: {} } as T103);s += f69({ id: s, ten: 'a', con: [], the: {} } as T69);s += f116({ id: s, ten: 'a', con: [], the: {} } as T116);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g121 = <K extends keyof T121>(o: T121, k: K): U121<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U121<K>[K];
