import { f547, T547 } from './m547';
import { f459, T459 } from './m459';
import { f513, T513 } from './m513';
export interface T577 { id: number; ten: string; con: T577[]; the: Record<string, number> }
export type U577<K extends keyof T577> = { [P in K]: T577[P] extends number ? string : T577[P] };
export function f577(x: T577, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f577(c, 1);
  s += f547({ id: s, ten: 'a', con: [], the: {} } as T547);s += f459({ id: s, ten: 'a', con: [], the: {} } as T459);s += f513({ id: s, ten: 'a', con: [], the: {} } as T513);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g577 = <K extends keyof T577>(o: T577, k: K): U577<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U577<K>[K];
