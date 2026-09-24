import { f89, T89 } from './m089';
import { f179, T179 } from './m179';
import { f219, T219 } from './m219';
export interface T312 { id: number; ten: string; con: T312[]; the: Record<string, number> }
export type U312<K extends keyof T312> = { [P in K]: T312[P] extends number ? string : T312[P] };
export function f312(x: T312, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f312(c, 1);
  s += f89({ id: s, ten: 'a', con: [], the: {} } as T89);s += f179({ id: s, ten: 'a', con: [], the: {} } as T179);s += f219({ id: s, ten: 'a', con: [], the: {} } as T219);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g312 = <K extends keyof T312>(o: T312, k: K): U312<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U312<K>[K];
