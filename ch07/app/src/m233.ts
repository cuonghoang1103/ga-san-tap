import { f0, T0 } from './m000';
import { f71, T71 } from './m071';
import { f162, T162 } from './m162';
export interface T233 { id: number; ten: string; con: T233[]; the: Record<string, number> }
export type U233<K extends keyof T233> = { [P in K]: T233[P] extends number ? string : T233[P] };
export function f233(x: T233, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f233(c, 1);
  s += f0({ id: s, ten: 'a', con: [], the: {} } as T0);s += f71({ id: s, ten: 'a', con: [], the: {} } as T71);s += f162({ id: s, ten: 'a', con: [], the: {} } as T162);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g233 = <K extends keyof T233>(o: T233, k: K): U233<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U233<K>[K];
