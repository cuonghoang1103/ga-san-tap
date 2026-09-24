import { f113, T113 } from './m113';
import { f101, T101 } from './m101';
import { f5, T5 } from './m005';
export interface T114 { id: number; ten: string; con: T114[]; the: Record<string, number> }
export type U114<K extends keyof T114> = { [P in K]: T114[P] extends number ? string : T114[P] };
export function f114(x: T114, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f114(c, 1);
  s += f113({ id: s, ten: 'a', con: [], the: {} } as T113);s += f101({ id: s, ten: 'a', con: [], the: {} } as T101);s += f5({ id: s, ten: 'a', con: [], the: {} } as T5);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g114 = <K extends keyof T114>(o: T114, k: K): U114<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U114<K>[K];
