import { f139, T139 } from './m139';
import { f400, T400 } from './m400';
import { f190, T190 } from './m190';
export interface T403 { id: number; ten: string; con: T403[]; the: Record<string, number> }
export type U403<K extends keyof T403> = { [P in K]: T403[P] extends number ? string : T403[P] };
export function f403(x: T403, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f403(c, 1);
  s += f139({ id: s, ten: 'a', con: [], the: {} } as T139);s += f400({ id: s, ten: 'a', con: [], the: {} } as T400);s += f190({ id: s, ten: 'a', con: [], the: {} } as T190);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g403 = <K extends keyof T403>(o: T403, k: K): U403<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U403<K>[K];
