import { f266, T266 } from './m266';
import { f166, T166 } from './m166';
import { f49, T49 } from './m049';
export interface T341 { id: number; ten: string; con: T341[]; the: Record<string, number> }
export type U341<K extends keyof T341> = { [P in K]: T341[P] extends number ? string : T341[P] };
export function f341(x: T341, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f341(c, 1);
  s += f266({ id: s, ten: 'a', con: [], the: {} } as T266);s += f166({ id: s, ten: 'a', con: [], the: {} } as T166);s += f49({ id: s, ten: 'a', con: [], the: {} } as T49);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g341 = <K extends keyof T341>(o: T341, k: K): U341<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U341<K>[K];
