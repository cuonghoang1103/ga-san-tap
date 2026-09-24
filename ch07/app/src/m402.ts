import { f196, T196 } from './m196';
import { f137, T137 } from './m137';
import { f237, T237 } from './m237';
export interface T402 { id: number; ten: string; con: T402[]; the: Record<string, number> }
export type U402<K extends keyof T402> = { [P in K]: T402[P] extends number ? string : T402[P] };
export function f402(x: T402, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f402(c, 1);
  s += f196({ id: s, ten: 'a', con: [], the: {} } as T196);s += f137({ id: s, ten: 'a', con: [], the: {} } as T137);s += f237({ id: s, ten: 'a', con: [], the: {} } as T237);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g402 = <K extends keyof T402>(o: T402, k: K): U402<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U402<K>[K];
