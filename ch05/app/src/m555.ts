import { f424, T424 } from './m424';
import { f111, T111 } from './m111';
import { f26, T26 } from './m026';
export interface T555 { id: number; ten: string; con: T555[]; the: Record<string, number> }
export type U555<K extends keyof T555> = { [P in K]: T555[P] extends number ? string : T555[P] };
export function f555(x: T555, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f555(c, 1);
  s += f424({ id: s, ten: 'a', con: [], the: {} } as T424);s += f111({ id: s, ten: 'a', con: [], the: {} } as T111);s += f26({ id: s, ten: 'a', con: [], the: {} } as T26);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g555 = <K extends keyof T555>(o: T555, k: K): U555<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U555<K>[K];
