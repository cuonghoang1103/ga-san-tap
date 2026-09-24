import { f428, T428 } from './m428';
import { f403, T403 } from './m403';
import { f308, T308 } from './m308';
export interface T512 { id: number; ten: string; con: T512[]; the: Record<string, number> }
export type U512<K extends keyof T512> = { [P in K]: T512[P] extends number ? string : T512[P] };
export function f512(x: T512, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f512(c, 1);
  s += f428({ id: s, ten: 'a', con: [], the: {} } as T428);s += f403({ id: s, ten: 'a', con: [], the: {} } as T403);s += f308({ id: s, ten: 'a', con: [], the: {} } as T308);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g512 = <K extends keyof T512>(o: T512, k: K): U512<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U512<K>[K];
