import { f20, T20 } from './m020';
import { f180, T180 } from './m180';
import { f234, T234 } from './m234';
export interface T383 { id: number; ten: string; con: T383[]; the: Record<string, number> }
export type U383<K extends keyof T383> = { [P in K]: T383[P] extends number ? string : T383[P] };
export function f383(x: T383, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f383(c, 1);
  s += f20({ id: s, ten: 'a', con: [], the: {} } as T20);s += f180({ id: s, ten: 'a', con: [], the: {} } as T180);s += f234({ id: s, ten: 'a', con: [], the: {} } as T234);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g383 = <K extends keyof T383>(o: T383, k: K): U383<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U383<K>[K];
