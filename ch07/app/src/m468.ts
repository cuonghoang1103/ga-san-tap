import { f29, T29 } from './m029';
import { f258, T258 } from './m258';
import { f166, T166 } from './m166';
export interface T468 { id: number; ten: string; con: T468[]; the: Record<string, number> }
export type U468<K extends keyof T468> = { [P in K]: T468[P] extends number ? string : T468[P] };
export function f468(x: T468, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f468(c, 1);
  s += f29({ id: s, ten: 'a', con: [], the: {} } as T29);s += f258({ id: s, ten: 'a', con: [], the: {} } as T258);s += f166({ id: s, ten: 'a', con: [], the: {} } as T166);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g468 = <K extends keyof T468>(o: T468, k: K): U468<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U468<K>[K];
