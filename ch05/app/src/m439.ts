import { f54, T54 } from './m054';
import { f76, T76 } from './m076';
import { f197, T197 } from './m197';
export interface T439 { id: number; ten: string; con: T439[]; the: Record<string, number> }
export type U439<K extends keyof T439> = { [P in K]: T439[P] extends number ? string : T439[P] };
export function f439(x: T439, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f439(c, 1);
  s += f54({ id: s, ten: 'a', con: [], the: {} } as T54);s += f76({ id: s, ten: 'a', con: [], the: {} } as T76);s += f197({ id: s, ten: 'a', con: [], the: {} } as T197);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g439 = <K extends keyof T439>(o: T439, k: K): U439<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U439<K>[K];
