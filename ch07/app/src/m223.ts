import { f206, T206 } from './m206';
import { f79, T79 } from './m079';
import { f111, T111 } from './m111';
export interface T223 { id: number; ten: string; con: T223[]; the: Record<string, number> }
export type U223<K extends keyof T223> = { [P in K]: T223[P] extends number ? string : T223[P] };
export function f223(x: T223, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f223(c, 1);
  s += f206({ id: s, ten: 'a', con: [], the: {} } as T206);s += f79({ id: s, ten: 'a', con: [], the: {} } as T79);s += f111({ id: s, ten: 'a', con: [], the: {} } as T111);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g223 = <K extends keyof T223>(o: T223, k: K): U223<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U223<K>[K];
