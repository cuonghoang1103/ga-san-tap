import { f259, T259 } from './m259';
import { f85, T85 } from './m085';
import { f14, T14 } from './m014';
export interface T360 { id: number; ten: string; con: T360[]; the: Record<string, number> }
export type U360<K extends keyof T360> = { [P in K]: T360[P] extends number ? string : T360[P] };
export function f360(x: T360, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f360(c, 1);
  s += f259({ id: s, ten: 'a', con: [], the: {} } as T259);s += f85({ id: s, ten: 'a', con: [], the: {} } as T85);s += f14({ id: s, ten: 'a', con: [], the: {} } as T14);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g360 = <K extends keyof T360>(o: T360, k: K): U360<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U360<K>[K];
