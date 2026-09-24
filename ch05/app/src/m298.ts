import { f81, T81 } from './m081';
import { f77, T77 } from './m077';
import { f15, T15 } from './m015';
export interface T298 { id: number; ten: string; con: T298[]; the: Record<string, number> }
export type U298<K extends keyof T298> = { [P in K]: T298[P] extends number ? string : T298[P] };
export function f298(x: T298, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f298(c, 1);
  s += f81({ id: s, ten: 'a', con: [], the: {} } as T81);s += f77({ id: s, ten: 'a', con: [], the: {} } as T77);s += f15({ id: s, ten: 'a', con: [], the: {} } as T15);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g298 = <K extends keyof T298>(o: T298, k: K): U298<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U298<K>[K];
