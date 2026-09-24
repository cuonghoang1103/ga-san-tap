import { f313, T313 } from './m313';
import { f26, T26 } from './m026';
import { f281, T281 } from './m281';
export interface T424 { id: number; ten: string; con: T424[]; the: Record<string, number> }
export type U424<K extends keyof T424> = { [P in K]: T424[P] extends number ? string : T424[P] };
export function f424(x: T424, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f424(c, 1);
  s += f313({ id: s, ten: 'a', con: [], the: {} } as T313);s += f26({ id: s, ten: 'a', con: [], the: {} } as T26);s += f281({ id: s, ten: 'a', con: [], the: {} } as T281);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g424 = <K extends keyof T424>(o: T424, k: K): U424<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U424<K>[K];
