import { f329, T329 } from './m329';
import { f88, T88 } from './m088';
import { f261, T261 } from './m261';
export interface T370 { id: number; ten: string; con: T370[]; the: Record<string, number> }
export type U370<K extends keyof T370> = { [P in K]: T370[P] extends number ? string : T370[P] };
export function f370(x: T370, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f370(c, 1);
  s += f329({ id: s, ten: 'a', con: [], the: {} } as T329);s += f88({ id: s, ten: 'a', con: [], the: {} } as T88);s += f261({ id: s, ten: 'a', con: [], the: {} } as T261);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g370 = <K extends keyof T370>(o: T370, k: K): U370<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U370<K>[K];
