import { f211, T211 } from './m211';
import { f132, T132 } from './m132';
import { f263, T263 } from './m263';
export interface T411 { id: number; ten: string; con: T411[]; the: Record<string, number> }
export type U411<K extends keyof T411> = { [P in K]: T411[P] extends number ? string : T411[P] };
export function f411(x: T411, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f411(c, 1);
  s += f211({ id: s, ten: 'a', con: [], the: {} } as T211);s += f132({ id: s, ten: 'a', con: [], the: {} } as T132);s += f263({ id: s, ten: 'a', con: [], the: {} } as T263);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g411 = <K extends keyof T411>(o: T411, k: K): U411<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U411<K>[K];
