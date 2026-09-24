import { f139, T139 } from './m139';
import { f91, T91 } from './m091';
import { f125, T125 } from './m125';
export interface T213 { id: number; ten: string; con: T213[]; the: Record<string, number> }
export type U213<K extends keyof T213> = { [P in K]: T213[P] extends number ? string : T213[P] };
export function f213(x: T213, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f213(c, 1);
  s += f139({ id: s, ten: 'a', con: [], the: {} } as T139);s += f91({ id: s, ten: 'a', con: [], the: {} } as T91);s += f125({ id: s, ten: 'a', con: [], the: {} } as T125);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g213 = <K extends keyof T213>(o: T213, k: K): U213<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U213<K>[K];
