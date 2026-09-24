import { f364, T364 } from './m364';
import { f277, T277 } from './m277';
import { f485, T485 } from './m485';
export interface T535 { id: number; ten: string; con: T535[]; the: Record<string, number> }
export type U535<K extends keyof T535> = { [P in K]: T535[P] extends number ? string : T535[P] };
export function f535(x: T535, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f535(c, 1);
  s += f364({ id: s, ten: 'a', con: [], the: {} } as T364);s += f277({ id: s, ten: 'a', con: [], the: {} } as T277);s += f485({ id: s, ten: 'a', con: [], the: {} } as T485);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g535 = <K extends keyof T535>(o: T535, k: K): U535<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U535<K>[K];
