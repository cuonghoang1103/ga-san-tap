import { f418, T418 } from './m418';
import { f415, T415 } from './m415';
import { f473, T473 } from './m473';
export interface T531 { id: number; ten: string; con: T531[]; the: Record<string, number> }
export type U531<K extends keyof T531> = { [P in K]: T531[P] extends number ? string : T531[P] };
export function f531(x: T531, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f531(c, 1);
  s += f418({ id: s, ten: 'a', con: [], the: {} } as T418);s += f415({ id: s, ten: 'a', con: [], the: {} } as T415);s += f473({ id: s, ten: 'a', con: [], the: {} } as T473);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g531 = <K extends keyof T531>(o: T531, k: K): U531<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U531<K>[K];
