import { f208, T208 } from './m208';
import { f287, T287 } from './m287';
import { f322, T322 } from './m322';
export interface T456 { id: number; ten: string; con: T456[]; the: Record<string, number> }
export type U456<K extends keyof T456> = { [P in K]: T456[P] extends number ? string : T456[P] };
export function f456(x: T456, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f456(c, 1);
  s += f208({ id: s, ten: 'a', con: [], the: {} } as T208);s += f287({ id: s, ten: 'a', con: [], the: {} } as T287);s += f322({ id: s, ten: 'a', con: [], the: {} } as T322);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g456 = <K extends keyof T456>(o: T456, k: K): U456<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U456<K>[K];
