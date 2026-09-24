import { f46, T46 } from './m046';
import { f53, T53 } from './m053';
import { f78, T78 } from './m078';
export interface T133 { id: number; ten: string; con: T133[]; the: Record<string, number> }
export type U133<K extends keyof T133> = { [P in K]: T133[P] extends number ? string : T133[P] };
export function f133(x: T133, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f133(c, 1);
  s += f46({ id: s, ten: 'a', con: [], the: {} } as T46);s += f53({ id: s, ten: 'a', con: [], the: {} } as T53);s += f78({ id: s, ten: 'a', con: [], the: {} } as T78);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g133 = <K extends keyof T133>(o: T133, k: K): U133<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U133<K>[K];
