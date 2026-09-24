import { f112, T112 } from './m112';
import { f148, T148 } from './m148';
import { f5, T5 } from './m005';
export interface T205 { id: number; ten: string; con: T205[]; the: Record<string, number> }
export type U205<K extends keyof T205> = { [P in K]: T205[P] extends number ? string : T205[P] };
export function f205(x: T205, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f205(c, 1);
  s += f112({ id: s, ten: 'a', con: [], the: {} } as T112);s += f148({ id: s, ten: 'a', con: [], the: {} } as T148);s += f5({ id: s, ten: 'a', con: [], the: {} } as T5);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g205 = <K extends keyof T205>(o: T205, k: K): U205<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U205<K>[K];
