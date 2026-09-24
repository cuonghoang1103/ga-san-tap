import { f154, T154 } from './m154';
import { f262, T262 } from './m262';
import { f382, T382 } from './m382';
export interface T387 { id: number; ten: string; con: T387[]; the: Record<string, number> }
export type U387<K extends keyof T387> = { [P in K]: T387[P] extends number ? string : T387[P] };
export function f387(x: T387, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f387(c, 1);
  s += f154({ id: s, ten: 'a', con: [], the: {} } as T154);s += f262({ id: s, ten: 'a', con: [], the: {} } as T262);s += f382({ id: s, ten: 'a', con: [], the: {} } as T382);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g387 = <K extends keyof T387>(o: T387, k: K): U387<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U387<K>[K];
