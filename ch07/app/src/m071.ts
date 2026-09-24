import { f7, T7 } from './m007';
import { f38, T38 } from './m038';
import { f16, T16 } from './m016';
export interface T71 { id: number; ten: string; con: T71[]; the: Record<string, number> }
export type U71<K extends keyof T71> = { [P in K]: T71[P] extends number ? string : T71[P] };
export function f71(x: T71, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f71(c, 1);
  s += f7({ id: s, ten: 'a', con: [], the: {} } as T7);s += f38({ id: s, ten: 'a', con: [], the: {} } as T38);s += f16({ id: s, ten: 'a', con: [], the: {} } as T16);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g71 = <K extends keyof T71>(o: T71, k: K): U71<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U71<K>[K];
