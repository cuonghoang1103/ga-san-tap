import { f81, T81 } from './m081';
import { f77, T77 } from './m077';
import { f62, T62 } from './m062';
export interface T139 { id: number; ten: string; con: T139[]; the: Record<string, number> }
export type U139<K extends keyof T139> = { [P in K]: T139[P] extends number ? string : T139[P] };
export function f139(x: T139, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f139(c, 1);
  s += f81({ id: s, ten: 'a', con: [], the: {} } as T81);s += f77({ id: s, ten: 'a', con: [], the: {} } as T77);s += f62({ id: s, ten: 'a', con: [], the: {} } as T62);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g139 = <K extends keyof T139>(o: T139, k: K): U139<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U139<K>[K];
