import { f80, T80 } from './m080';
import { f102, T102 } from './m102';
import { f16, T16 } from './m016';
export interface T129 { id: number; ten: string; con: T129[]; the: Record<string, number> }
export type U129<K extends keyof T129> = { [P in K]: T129[P] extends number ? string : T129[P] };
export function f129(x: T129, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f129(c, 1);
  s += f80({ id: s, ten: 'a', con: [], the: {} } as T80);s += f102({ id: s, ten: 'a', con: [], the: {} } as T102);s += f16({ id: s, ten: 'a', con: [], the: {} } as T16);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g129 = <K extends keyof T129>(o: T129, k: K): U129<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U129<K>[K];
