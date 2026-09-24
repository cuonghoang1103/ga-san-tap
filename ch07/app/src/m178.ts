import { f40, T40 } from './m040';
import { f130, T130 } from './m130';
import { f52, T52 } from './m052';
export interface T178 { id: number; ten: string; con: T178[]; the: Record<string, number> }
export type U178<K extends keyof T178> = { [P in K]: T178[P] extends number ? string : T178[P] };
export function f178(x: T178, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f178(c, 1);
  s += f40({ id: s, ten: 'a', con: [], the: {} } as T40);s += f130({ id: s, ten: 'a', con: [], the: {} } as T130);s += f52({ id: s, ten: 'a', con: [], the: {} } as T52);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g178 = <K extends keyof T178>(o: T178, k: K): U178<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U178<K>[K];
