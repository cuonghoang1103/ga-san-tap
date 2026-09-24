import { f15, T15 } from './m015';
import { f206, T206 } from './m206';
import { f162, T162 } from './m162';
export interface T273 { id: number; ten: string; con: T273[]; the: Record<string, number> }
export type U273<K extends keyof T273> = { [P in K]: T273[P] extends number ? string : T273[P] };
export function f273(x: T273, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f273(c, 1);
  s += f15({ id: s, ten: 'a', con: [], the: {} } as T15);s += f206({ id: s, ten: 'a', con: [], the: {} } as T206);s += f162({ id: s, ten: 'a', con: [], the: {} } as T162);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g273 = <K extends keyof T273>(o: T273, k: K): U273<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U273<K>[K];
