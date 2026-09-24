import { f135, T135 } from './m135';
import { f50, T50 } from './m050';
import { f92, T92 } from './m092';
export interface T241 { id: number; ten: string; con: T241[]; the: Record<string, number> }
export type U241<K extends keyof T241> = { [P in K]: T241[P] extends number ? string : T241[P] };
export function f241(x: T241, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f241(c, 1);
  s += f135({ id: s, ten: 'a', con: [], the: {} } as T135);s += f50({ id: s, ten: 'a', con: [], the: {} } as T50);s += f92({ id: s, ten: 'a', con: [], the: {} } as T92);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g241 = <K extends keyof T241>(o: T241, k: K): U241<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U241<K>[K];
