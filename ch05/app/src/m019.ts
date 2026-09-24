import { f16, T16 } from './m016';
import { f13, T13 } from './m013';
import { f18, T18 } from './m018';
export interface T19 { id: number; ten: string; con: T19[]; the: Record<string, number> }
export type U19<K extends keyof T19> = { [P in K]: T19[P] extends number ? string : T19[P] };
export function f19(x: T19, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f19(c, 1);
  s += f16({ id: s, ten: 'a', con: [], the: {} } as T16);s += f13({ id: s, ten: 'a', con: [], the: {} } as T13);s += f18({ id: s, ten: 'a', con: [], the: {} } as T18);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g19 = <K extends keyof T19>(o: T19, k: K): U19<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U19<K>[K];
