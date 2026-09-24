import { f221, T221 } from './m221';
import { f46, T46 } from './m046';
import { f97, T97 } from './m097';
export interface T306 { id: number; ten: string; con: T306[]; the: Record<string, number> }
export type U306<K extends keyof T306> = { [P in K]: T306[P] extends number ? string : T306[P] };
export function f306(x: T306, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f306(c, 1);
  s += f221({ id: s, ten: 'a', con: [], the: {} } as T221);s += f46({ id: s, ten: 'a', con: [], the: {} } as T46);s += f97({ id: s, ten: 'a', con: [], the: {} } as T97);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g306 = <K extends keyof T306>(o: T306, k: K): U306<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U306<K>[K];
