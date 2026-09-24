import { f134, T134 } from './m134';
import { f0, T0 } from './m000';
import { f173, T173 } from './m173';
export interface T242 { id: number; ten: string; con: T242[]; the: Record<string, number> }
export type U242<K extends keyof T242> = { [P in K]: T242[P] extends number ? string : T242[P] };
export function f242(x: T242, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f242(c, 1);
  s += f134({ id: s, ten: 'a', con: [], the: {} } as T134);s += f0({ id: s, ten: 'a', con: [], the: {} } as T0);s += f173({ id: s, ten: 'a', con: [], the: {} } as T173);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g242 = <K extends keyof T242>(o: T242, k: K): U242<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U242<K>[K];
