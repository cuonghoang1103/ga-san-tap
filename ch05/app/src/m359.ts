import { f306, T306 } from './m306';
import { f174, T174 } from './m174';
import { f272, T272 } from './m272';
export interface T359 { id: number; ten: string; con: T359[]; the: Record<string, number> }
export type U359<K extends keyof T359> = { [P in K]: T359[P] extends number ? string : T359[P] };
export function f359(x: T359, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f359(c, 1);
  s += f306({ id: s, ten: 'a', con: [], the: {} } as T306);s += f174({ id: s, ten: 'a', con: [], the: {} } as T174);s += f272({ id: s, ten: 'a', con: [], the: {} } as T272);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g359 = <K extends keyof T359>(o: T359, k: K): U359<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U359<K>[K];
