import { f306, T306 } from './m306';
import { f252, T252 } from './m252';
import { f120, T120 } from './m120';
export interface T374 { id: number; ten: string; con: T374[]; the: Record<string, number> }
export type U374<K extends keyof T374> = { [P in K]: T374[P] extends number ? string : T374[P] };
export function f374(x: T374, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f374(c, 1);
  s += f306({ id: s, ten: 'a', con: [], the: {} } as T306);s += f252({ id: s, ten: 'a', con: [], the: {} } as T252);s += f120({ id: s, ten: 'a', con: [], the: {} } as T120);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g374 = <K extends keyof T374>(o: T374, k: K): U374<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U374<K>[K];
