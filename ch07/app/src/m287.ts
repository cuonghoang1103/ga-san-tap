import { f60, T60 } from './m060';
import { f88, T88 } from './m088';
import { f48, T48 } from './m048';
export interface T287 { id: number; ten: string; con: T287[]; the: Record<string, number> }
export type U287<K extends keyof T287> = { [P in K]: T287[P] extends number ? string : T287[P] };
export function f287(x: T287, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f287(c, 1);
  s += f60({ id: s, ten: 'a', con: [], the: {} } as T60);s += f88({ id: s, ten: 'a', con: [], the: {} } as T88);s += f48({ id: s, ten: 'a', con: [], the: {} } as T48);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g287 = <K extends keyof T287>(o: T287, k: K): U287<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U287<K>[K];
