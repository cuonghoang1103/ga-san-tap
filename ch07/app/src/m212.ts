import { f202, T202 } from './m202';
import { f207, T207 } from './m207';
import { f43, T43 } from './m043';
export interface T212 { id: number; ten: string; con: T212[]; the: Record<string, number> }
export type U212<K extends keyof T212> = { [P in K]: T212[P] extends number ? string : T212[P] };
export function f212(x: T212, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f212(c, 1);
  s += f202({ id: s, ten: 'a', con: [], the: {} } as T202);s += f207({ id: s, ten: 'a', con: [], the: {} } as T207);s += f43({ id: s, ten: 'a', con: [], the: {} } as T43);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g212 = <K extends keyof T212>(o: T212, k: K): U212<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U212<K>[K];
