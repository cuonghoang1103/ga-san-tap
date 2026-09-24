import { f415, T415 } from './m415';
import { f391, T391 } from './m391';
import { f427, T427 } from './m427';
export interface T594 { id: number; ten: string; con: T594[]; the: Record<string, number> }
export type U594<K extends keyof T594> = { [P in K]: T594[P] extends number ? string : T594[P] };
export function f594(x: T594, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f594(c, 1);
  s += f415({ id: s, ten: 'a', con: [], the: {} } as T415);s += f391({ id: s, ten: 'a', con: [], the: {} } as T391);s += f427({ id: s, ten: 'a', con: [], the: {} } as T427);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g594 = <K extends keyof T594>(o: T594, k: K): U594<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U594<K>[K];
