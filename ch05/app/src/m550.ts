import { f472, T472 } from './m472';
import { f482, T482 } from './m482';
import { f378, T378 } from './m378';
export interface T550 { id: number; ten: string; con: T550[]; the: Record<string, number> }
export type U550<K extends keyof T550> = { [P in K]: T550[P] extends number ? string : T550[P] };
export function f550(x: T550, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f550(c, 1);
  s += f472({ id: s, ten: 'a', con: [], the: {} } as T472);s += f482({ id: s, ten: 'a', con: [], the: {} } as T482);s += f378({ id: s, ten: 'a', con: [], the: {} } as T378);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g550 = <K extends keyof T550>(o: T550, k: K): U550<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U550<K>[K];
