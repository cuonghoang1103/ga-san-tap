import { f22, T22 } from './m022';
import { f491, T491 } from './m491';
import { f214, T214 } from './m214';
export interface T546 { id: number; ten: string; con: T546[]; the: Record<string, number> }
export type U546<K extends keyof T546> = { [P in K]: T546[P] extends number ? string : T546[P] };
export function f546(x: T546, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f546(c, 1);
  s += f22({ id: s, ten: 'a', con: [], the: {} } as T22);s += f491({ id: s, ten: 'a', con: [], the: {} } as T491);s += f214({ id: s, ten: 'a', con: [], the: {} } as T214);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g546 = <K extends keyof T546>(o: T546, k: K): U546<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U546<K>[K];
