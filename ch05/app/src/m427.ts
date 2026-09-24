import { f52, T52 } from './m052';
import { f376, T376 } from './m376';
import { f283, T283 } from './m283';
export interface T427 { id: number; ten: string; con: T427[]; the: Record<string, number> }
export type U427<K extends keyof T427> = { [P in K]: T427[P] extends number ? string : T427[P] };
export function f427(x: T427, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f427(c, 1);
  s += f52({ id: s, ten: 'a', con: [], the: {} } as T52);s += f376({ id: s, ten: 'a', con: [], the: {} } as T376);s += f283({ id: s, ten: 'a', con: [], the: {} } as T283);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g427 = <K extends keyof T427>(o: T427, k: K): U427<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U427<K>[K];
