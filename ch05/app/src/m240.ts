import { f115, T115 } from './m115';
import { f158, T158 } from './m158';
import { f171, T171 } from './m171';
export interface T240 { id: number; ten: string; con: T240[]; the: Record<string, number> }
export type U240<K extends keyof T240> = { [P in K]: T240[P] extends number ? string : T240[P] };
export function f240(x: T240, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f240(c, 1);
  s += f115({ id: s, ten: 'a', con: [], the: {} } as T115);s += f158({ id: s, ten: 'a', con: [], the: {} } as T158);s += f171({ id: s, ten: 'a', con: [], the: {} } as T171);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g240 = <K extends keyof T240>(o: T240, k: K): U240<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U240<K>[K];
