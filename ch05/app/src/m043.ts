import { f31, T31 } from './m031';
import { f22, T22 } from './m022';
import { f26, T26 } from './m026';
export interface T43 { id: number; ten: string; con: T43[]; the: Record<string, number> }
export type U43<K extends keyof T43> = { [P in K]: T43[P] extends number ? string : T43[P] };
export function f43(x: T43, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f43(c, 1);
  s += f31({ id: s, ten: 'a', con: [], the: {} } as T31);s += f22({ id: s, ten: 'a', con: [], the: {} } as T22);s += f26({ id: s, ten: 'a', con: [], the: {} } as T26);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g43 = <K extends keyof T43>(o: T43, k: K): U43<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U43<K>[K];
