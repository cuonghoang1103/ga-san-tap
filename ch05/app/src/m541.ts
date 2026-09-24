import { f367, T367 } from './m367';
import { f300, T300 } from './m300';
import { f349, T349 } from './m349';
export interface T541 { id: number; ten: string; con: T541[]; the: Record<string, number> }
export type U541<K extends keyof T541> = { [P in K]: T541[P] extends number ? string : T541[P] };
export function f541(x: T541, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f541(c, 1);
  s += f367({ id: s, ten: 'a', con: [], the: {} } as T367);s += f300({ id: s, ten: 'a', con: [], the: {} } as T300);s += f349({ id: s, ten: 'a', con: [], the: {} } as T349);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g541 = <K extends keyof T541>(o: T541, k: K): U541<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U541<K>[K];
