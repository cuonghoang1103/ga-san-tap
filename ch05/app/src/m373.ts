import { f145, T145 } from './m145';
import { f112, T112 } from './m112';
import { f102, T102 } from './m102';
export interface T373 { id: number; ten: string; con: T373[]; the: Record<string, number> }
export type U373<K extends keyof T373> = { [P in K]: T373[P] extends number ? string : T373[P] };
export function f373(x: T373, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f373(c, 1);
  s += f145({ id: s, ten: 'a', con: [], the: {} } as T145);s += f112({ id: s, ten: 'a', con: [], the: {} } as T112);s += f102({ id: s, ten: 'a', con: [], the: {} } as T102);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g373 = <K extends keyof T373>(o: T373, k: K): U373<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U373<K>[K];
