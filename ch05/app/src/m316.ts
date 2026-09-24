import { f274, T274 } from './m274';
import { f217, T217 } from './m217';
import { f35, T35 } from './m035';
export interface T316 { id: number; ten: string; con: T316[]; the: Record<string, number> }
export type U316<K extends keyof T316> = { [P in K]: T316[P] extends number ? string : T316[P] };
export function f316(x: T316, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f316(c, 1);
  s += f274({ id: s, ten: 'a', con: [], the: {} } as T274);s += f217({ id: s, ten: 'a', con: [], the: {} } as T217);s += f35({ id: s, ten: 'a', con: [], the: {} } as T35);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g316 = <K extends keyof T316>(o: T316, k: K): U316<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U316<K>[K];
