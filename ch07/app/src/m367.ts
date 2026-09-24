import { f133, T133 } from './m133';
import { f34, T34 } from './m034';
import { f323, T323 } from './m323';
export interface T367 { id: number; ten: string; con: T367[]; the: Record<string, number> }
export type U367<K extends keyof T367> = { [P in K]: T367[P] extends number ? string : T367[P] };
export function f367(x: T367, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f367(c, 1);
  s += f133({ id: s, ten: 'a', con: [], the: {} } as T133);s += f34({ id: s, ten: 'a', con: [], the: {} } as T34);s += f323({ id: s, ten: 'a', con: [], the: {} } as T323);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g367 = <K extends keyof T367>(o: T367, k: K): U367<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U367<K>[K];
