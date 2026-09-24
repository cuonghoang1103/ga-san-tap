import { f136, T136 } from './m136';
import { f575, T575 } from './m575';
import { f325, T325 } from './m325';
export interface T576 { id: number; ten: string; con: T576[]; the: Record<string, number> }
export type U576<K extends keyof T576> = { [P in K]: T576[P] extends number ? string : T576[P] };
export function f576(x: T576, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f576(c, 1);
  s += f136({ id: s, ten: 'a', con: [], the: {} } as T136);s += f575({ id: s, ten: 'a', con: [], the: {} } as T575);s += f325({ id: s, ten: 'a', con: [], the: {} } as T325);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g576 = <K extends keyof T576>(o: T576, k: K): U576<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U576<K>[K];
