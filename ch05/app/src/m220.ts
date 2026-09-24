import { f172, T172 } from './m172';
import { f194, T194 } from './m194';
import { f185, T185 } from './m185';
export interface T220 { id: number; ten: string; con: T220[]; the: Record<string, number> }
export type U220<K extends keyof T220> = { [P in K]: T220[P] extends number ? string : T220[P] };
export function f220(x: T220, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f220(c, 1);
  s += f172({ id: s, ten: 'a', con: [], the: {} } as T172);s += f194({ id: s, ten: 'a', con: [], the: {} } as T194);s += f185({ id: s, ten: 'a', con: [], the: {} } as T185);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g220 = <K extends keyof T220>(o: T220, k: K): U220<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U220<K>[K];
