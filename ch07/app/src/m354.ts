import { f68, T68 } from './m068';
import { f24, T24 } from './m024';
import { f268, T268 } from './m268';
export interface T354 { id: number; ten: string; con: T354[]; the: Record<string, number> }
export type U354<K extends keyof T354> = { [P in K]: T354[P] extends number ? string : T354[P] };
export function f354(x: T354, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f354(c, 1);
  s += f68({ id: s, ten: 'a', con: [], the: {} } as T68);s += f24({ id: s, ten: 'a', con: [], the: {} } as T24);s += f268({ id: s, ten: 'a', con: [], the: {} } as T268);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g354 = <K extends keyof T354>(o: T354, k: K): U354<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U354<K>[K];
