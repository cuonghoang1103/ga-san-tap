import { f43, T43 } from './m043';
import { f14, T14 } from './m014';
import { f78, T78 } from './m078';
export interface T103 { id: number; ten: string; con: T103[]; the: Record<string, number> }
export type U103<K extends keyof T103> = { [P in K]: T103[P] extends number ? string : T103[P] };
export function f103(x: T103, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f103(c, 1);
  s += f43({ id: s, ten: 'a', con: [], the: {} } as T43);s += f14({ id: s, ten: 'a', con: [], the: {} } as T14);s += f78({ id: s, ten: 'a', con: [], the: {} } as T78);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g103 = <K extends keyof T103>(o: T103, k: K): U103<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U103<K>[K];
