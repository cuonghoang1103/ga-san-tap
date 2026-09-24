import { f5, T5 } from './m005';
import { f62, T62 } from './m062';
import { f102, T102 } from './m102';
export interface T142 { id: number; ten: string; con: T142[]; the: Record<string, number> }
export type U142<K extends keyof T142> = { [P in K]: T142[P] extends number ? string : T142[P] };
export function f142(x: T142, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f142(c, 1);
  s += f5({ id: s, ten: 'a', con: [], the: {} } as T5);s += f62({ id: s, ten: 'a', con: [], the: {} } as T62);s += f102({ id: s, ten: 'a', con: [], the: {} } as T102);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g142 = <K extends keyof T142>(o: T142, k: K): U142<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U142<K>[K];
