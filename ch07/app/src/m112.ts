import { f85, T85 } from './m085';
import { f1, T1 } from './m001';
import { f11, T11 } from './m011';
export interface T112 { id: number; ten: string; con: T112[]; the: Record<string, number> }
export type U112<K extends keyof T112> = { [P in K]: T112[P] extends number ? string : T112[P] };
export function f112(x: T112, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f112(c, 1);
  s += f85({ id: s, ten: 'a', con: [], the: {} } as T85);s += f1({ id: s, ten: 'a', con: [], the: {} } as T1);s += f11({ id: s, ten: 'a', con: [], the: {} } as T11);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g112 = <K extends keyof T112>(o: T112, k: K): U112<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U112<K>[K];
