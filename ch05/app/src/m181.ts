import { f42, T42 } from './m042';
import { f179, T179 } from './m179';
import { f118, T118 } from './m118';
export interface T181 { id: number; ten: string; con: T181[]; the: Record<string, number> }
export type U181<K extends keyof T181> = { [P in K]: T181[P] extends number ? string : T181[P] };
export function f181(x: T181, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f181(c, 1);
  s += f42({ id: s, ten: 'a', con: [], the: {} } as T42);s += f179({ id: s, ten: 'a', con: [], the: {} } as T179);s += f118({ id: s, ten: 'a', con: [], the: {} } as T118);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g181 = <K extends keyof T181>(o: T181, k: K): U181<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U181<K>[K];
