import { f259, T259 } from './m259';
import { f82, T82 } from './m082';
import { f47, T47 } from './m047';
export interface T263 { id: number; ten: string; con: T263[]; the: Record<string, number> }
export type U263<K extends keyof T263> = { [P in K]: T263[P] extends number ? string : T263[P] };
export function f263(x: T263, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f263(c, 1);
  s += f259({ id: s, ten: 'a', con: [], the: {} } as T259);s += f82({ id: s, ten: 'a', con: [], the: {} } as T82);s += f47({ id: s, ten: 'a', con: [], the: {} } as T47);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g263 = <K extends keyof T263>(o: T263, k: K): U263<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U263<K>[K];
