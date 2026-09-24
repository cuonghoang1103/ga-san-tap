import { f102, T102 } from './m102';
import { f44, T44 } from './m044';
import { f156, T156 } from './m156';
export interface T167 { id: number; ten: string; con: T167[]; the: Record<string, number> }
export type U167<K extends keyof T167> = { [P in K]: T167[P] extends number ? string : T167[P] };
export function f167(x: T167, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f167(c, 1);
  s += f102({ id: s, ten: 'a', con: [], the: {} } as T102);s += f44({ id: s, ten: 'a', con: [], the: {} } as T44);s += f156({ id: s, ten: 'a', con: [], the: {} } as T156);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g167 = <K extends keyof T167>(o: T167, k: K): U167<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U167<K>[K];
