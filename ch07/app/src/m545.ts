import { f499, T499 } from './m499';
import { f349, T349 } from './m349';
import { f124, T124 } from './m124';
export interface T545 { id: number; ten: string; con: T545[]; the: Record<string, number> }
export type U545<K extends keyof T545> = { [P in K]: T545[P] extends number ? string : T545[P] };
export function f545(x: T545, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f545(c, 1);
  s += f499({ id: s, ten: 'a', con: [], the: {} } as T499);s += f349({ id: s, ten: 'a', con: [], the: {} } as T349);s += f124({ id: s, ten: 'a', con: [], the: {} } as T124);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g545 = <K extends keyof T545>(o: T545, k: K): U545<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U545<K>[K];
