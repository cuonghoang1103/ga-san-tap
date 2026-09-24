import { f24, T24 } from './m024';
import { f5, T5 } from './m005';
import { f16, T16 } from './m016';
export interface T29 { id: number; ten: string; con: T29[]; the: Record<string, number> }
export type U29<K extends keyof T29> = { [P in K]: T29[P] extends number ? string : T29[P] };
export function f29(x: T29, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f29(c, 1);
  s += f24({ id: s, ten: 'a', con: [], the: {} } as T24);s += f5({ id: s, ten: 'a', con: [], the: {} } as T5);s += f16({ id: s, ten: 'a', con: [], the: {} } as T16);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g29 = <K extends keyof T29>(o: T29, k: K): U29<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U29<K>[K];
