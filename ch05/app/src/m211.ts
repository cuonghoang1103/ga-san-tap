import { f64, T64 } from './m064';
import { f174, T174 } from './m174';
import { f114, T114 } from './m114';
export interface T211 { id: number; ten: string; con: T211[]; the: Record<string, number> }
export type U211<K extends keyof T211> = { [P in K]: T211[P] extends number ? string : T211[P] };
export function f211(x: T211, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f211(c, 1);
  s += f64({ id: s, ten: 'a', con: [], the: {} } as T64);s += f174({ id: s, ten: 'a', con: [], the: {} } as T174);s += f114({ id: s, ten: 'a', con: [], the: {} } as T114);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g211 = <K extends keyof T211>(o: T211, k: K): U211<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U211<K>[K];
