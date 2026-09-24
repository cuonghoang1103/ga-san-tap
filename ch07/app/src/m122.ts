import { f104, T104 } from './m104';
import { f37, T37 } from './m037';
import { f70, T70 } from './m070';
export interface T122 { id: number; ten: string; con: T122[]; the: Record<string, number> }
export type U122<K extends keyof T122> = { [P in K]: T122[P] extends number ? string : T122[P] };
export function f122(x: T122, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f122(c, 1);
  s += f104({ id: s, ten: 'a', con: [], the: {} } as T104);s += f37({ id: s, ten: 'a', con: [], the: {} } as T37);s += f70({ id: s, ten: 'a', con: [], the: {} } as T70);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g122 = <K extends keyof T122>(o: T122, k: K): U122<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U122<K>[K];
