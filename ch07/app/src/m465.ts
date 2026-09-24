import { f388, T388 } from './m388';
import { f92, T92 } from './m092';
import { f378, T378 } from './m378';
export interface T465 { id: number; ten: string; con: T465[]; the: Record<string, number> }
export type U465<K extends keyof T465> = { [P in K]: T465[P] extends number ? string : T465[P] };
export function f465(x: T465, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f465(c, 1);
  s += f388({ id: s, ten: 'a', con: [], the: {} } as T388);s += f92({ id: s, ten: 'a', con: [], the: {} } as T92);s += f378({ id: s, ten: 'a', con: [], the: {} } as T378);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g465 = <K extends keyof T465>(o: T465, k: K): U465<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U465<K>[K];
