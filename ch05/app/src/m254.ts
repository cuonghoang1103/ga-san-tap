import { f45, T45 } from './m045';
import { f196, T196 } from './m196';
import { f18, T18 } from './m018';
export interface T254 { id: number; ten: string; con: T254[]; the: Record<string, number> }
export type U254<K extends keyof T254> = { [P in K]: T254[P] extends number ? string : T254[P] };
export function f254(x: T254, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f254(c, 1);
  s += f45({ id: s, ten: 'a', con: [], the: {} } as T45);s += f196({ id: s, ten: 'a', con: [], the: {} } as T196);s += f18({ id: s, ten: 'a', con: [], the: {} } as T18);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g254 = <K extends keyof T254>(o: T254, k: K): U254<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U254<K>[K];
