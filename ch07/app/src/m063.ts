import { f12, T12 } from './m012';
import { f16, T16 } from './m016';
import { f6, T6 } from './m006';
export interface T63 { id: number; ten: string; con: T63[]; the: Record<string, number> }
export type U63<K extends keyof T63> = { [P in K]: T63[P] extends number ? string : T63[P] };
export function f63(x: T63, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f63(c, 1);
  s += f12({ id: s, ten: 'a', con: [], the: {} } as T12);s += f16({ id: s, ten: 'a', con: [], the: {} } as T16);s += f6({ id: s, ten: 'a', con: [], the: {} } as T6);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g63 = <K extends keyof T63>(o: T63, k: K): U63<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U63<K>[K];
