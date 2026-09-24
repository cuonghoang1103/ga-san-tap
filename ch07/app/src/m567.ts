import { f437, T437 } from './m437';
import { f241, T241 } from './m241';
import { f41, T41 } from './m041';
export interface T567 { id: number; ten: string; con: T567[]; the: Record<string, number> }
export type U567<K extends keyof T567> = { [P in K]: T567[P] extends number ? string : T567[P] };
export function f567(x: T567, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f567(c, 1);
  s += f437({ id: s, ten: 'a', con: [], the: {} } as T437);s += f241({ id: s, ten: 'a', con: [], the: {} } as T241);s += f41({ id: s, ten: 'a', con: [], the: {} } as T41);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g567 = <K extends keyof T567>(o: T567, k: K): U567<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U567<K>[K];
