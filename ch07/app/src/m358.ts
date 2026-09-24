import { f206, T206 } from './m206';
import { f157, T157 } from './m157';
import { f237, T237 } from './m237';
export interface T358 { id: number; ten: string; con: T358[]; the: Record<string, number> }
export type U358<K extends keyof T358> = { [P in K]: T358[P] extends number ? string : T358[P] };
export function f358(x: T358, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f358(c, 1);
  s += f206({ id: s, ten: 'a', con: [], the: {} } as T206);s += f157({ id: s, ten: 'a', con: [], the: {} } as T157);s += f237({ id: s, ten: 'a', con: [], the: {} } as T237);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g358 = <K extends keyof T358>(o: T358, k: K): U358<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U358<K>[K];
