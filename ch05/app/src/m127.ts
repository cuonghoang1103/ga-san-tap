import { f125, T125 } from './m125';
import { f118, T118 } from './m118';
import { f37, T37 } from './m037';
export interface T127 { id: number; ten: string; con: T127[]; the: Record<string, number> }
export type U127<K extends keyof T127> = { [P in K]: T127[P] extends number ? string : T127[P] };
export function f127(x: T127, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f127(c, 1);
  s += f125({ id: s, ten: 'a', con: [], the: {} } as T125);s += f118({ id: s, ten: 'a', con: [], the: {} } as T118);s += f37({ id: s, ten: 'a', con: [], the: {} } as T37);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g127 = <K extends keyof T127>(o: T127, k: K): U127<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U127<K>[K];
