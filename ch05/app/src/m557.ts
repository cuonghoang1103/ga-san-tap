import { f386, T386 } from './m386';
import { f514, T514 } from './m514';
import { f295, T295 } from './m295';
export interface T557 { id: number; ten: string; con: T557[]; the: Record<string, number> }
export type U557<K extends keyof T557> = { [P in K]: T557[P] extends number ? string : T557[P] };
export function f557(x: T557, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f557(c, 1);
  s += f386({ id: s, ten: 'a', con: [], the: {} } as T386);s += f514({ id: s, ten: 'a', con: [], the: {} } as T514);s += f295({ id: s, ten: 'a', con: [], the: {} } as T295);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g557 = <K extends keyof T557>(o: T557, k: K): U557<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U557<K>[K];
