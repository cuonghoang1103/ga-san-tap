import { f57, T57 } from './m057';
import { f64, T64 } from './m064';
import { f54, T54 } from './m054';
export interface T67 { id: number; ten: string; con: T67[]; the: Record<string, number> }
export type U67<K extends keyof T67> = { [P in K]: T67[P] extends number ? string : T67[P] };
export function f67(x: T67, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f67(c, 1);
  s += f57({ id: s, ten: 'a', con: [], the: {} } as T57);s += f64({ id: s, ten: 'a', con: [], the: {} } as T64);s += f54({ id: s, ten: 'a', con: [], the: {} } as T54);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g67 = <K extends keyof T67>(o: T67, k: K): U67<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U67<K>[K];
