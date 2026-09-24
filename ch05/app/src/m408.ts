import { f75, T75 } from './m075';
import { f9, T9 } from './m009';
import { f88, T88 } from './m088';
export interface T408 { id: number; ten: string; con: T408[]; the: Record<string, number> }
export type U408<K extends keyof T408> = { [P in K]: T408[P] extends number ? string : T408[P] };
export function f408(x: T408, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f408(c, 1);
  s += f75({ id: s, ten: 'a', con: [], the: {} } as T75);s += f9({ id: s, ten: 'a', con: [], the: {} } as T9);s += f88({ id: s, ten: 'a', con: [], the: {} } as T88);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g408 = <K extends keyof T408>(o: T408, k: K): U408<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U408<K>[K];
