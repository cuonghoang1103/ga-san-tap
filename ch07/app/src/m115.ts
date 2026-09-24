import { f24, T24 } from './m024';
import { f30, T30 } from './m030';
import { f100, T100 } from './m100';
export interface T115 { id: number; ten: string; con: T115[]; the: Record<string, number> }
export type U115<K extends keyof T115> = { [P in K]: T115[P] extends number ? string : T115[P] };
export function f115(x: T115, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f115(c, 1);
  s += f24({ id: s, ten: 'a', con: [], the: {} } as T24);s += f30({ id: s, ten: 'a', con: [], the: {} } as T30);s += f100({ id: s, ten: 'a', con: [], the: {} } as T100);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g115 = <K extends keyof T115>(o: T115, k: K): U115<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U115<K>[K];
