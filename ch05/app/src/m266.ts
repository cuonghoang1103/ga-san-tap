import { f137, T137 } from './m137';
import { f35, T35 } from './m035';
import { f38, T38 } from './m038';
export interface T266 { id: number; ten: string; con: T266[]; the: Record<string, number> }
export type U266<K extends keyof T266> = { [P in K]: T266[P] extends number ? string : T266[P] };
export function f266(x: T266, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f266(c, 1);
  s += f137({ id: s, ten: 'a', con: [], the: {} } as T137);s += f35({ id: s, ten: 'a', con: [], the: {} } as T35);s += f38({ id: s, ten: 'a', con: [], the: {} } as T38);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g266 = <K extends keyof T266>(o: T266, k: K): U266<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U266<K>[K];
