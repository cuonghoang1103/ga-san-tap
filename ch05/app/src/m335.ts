import { f200, T200 } from './m200';
import { f299, T299 } from './m299';
import { f246, T246 } from './m246';
export interface T335 { id: number; ten: string; con: T335[]; the: Record<string, number> }
export type U335<K extends keyof T335> = { [P in K]: T335[P] extends number ? string : T335[P] };
export function f335(x: T335, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f335(c, 1);
  s += f200({ id: s, ten: 'a', con: [], the: {} } as T200);s += f299({ id: s, ten: 'a', con: [], the: {} } as T299);s += f246({ id: s, ten: 'a', con: [], the: {} } as T246);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g335 = <K extends keyof T335>(o: T335, k: K): U335<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U335<K>[K];
