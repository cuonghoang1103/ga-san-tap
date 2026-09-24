import { f297, T297 } from './m297';
import { f266, T266 } from './m266';
import { f274, T274 } from './m274';
export interface T338 { id: number; ten: string; con: T338[]; the: Record<string, number> }
export type U338<K extends keyof T338> = { [P in K]: T338[P] extends number ? string : T338[P] };
export function f338(x: T338, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f338(c, 1);
  s += f297({ id: s, ten: 'a', con: [], the: {} } as T297);s += f266({ id: s, ten: 'a', con: [], the: {} } as T266);s += f274({ id: s, ten: 'a', con: [], the: {} } as T274);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g338 = <K extends keyof T338>(o: T338, k: K): U338<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U338<K>[K];
