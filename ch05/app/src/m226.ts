import { f0, T0 } from './m000';
import { f31, T31 } from './m031';
import { f113, T113 } from './m113';
export interface T226 { id: number; ten: string; con: T226[]; the: Record<string, number> }
export type U226<K extends keyof T226> = { [P in K]: T226[P] extends number ? string : T226[P] };
export function f226(x: T226, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f226(c, 1);
  s += f0({ id: s, ten: 'a', con: [], the: {} } as T0);s += f31({ id: s, ten: 'a', con: [], the: {} } as T31);s += f113({ id: s, ten: 'a', con: [], the: {} } as T113);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g226 = <K extends keyof T226>(o: T226, k: K): U226<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U226<K>[K];
