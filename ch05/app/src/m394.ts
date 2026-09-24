import { f259, T259 } from './m259';
import { f227, T227 } from './m227';
import { f300, T300 } from './m300';
export interface T394 { id: number; ten: string; con: T394[]; the: Record<string, number> }
export type U394<K extends keyof T394> = { [P in K]: T394[P] extends number ? string : T394[P] };
export function f394(x: T394, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f394(c, 1);
  s += f259({ id: s, ten: 'a', con: [], the: {} } as T259);s += f227({ id: s, ten: 'a', con: [], the: {} } as T227);s += f300({ id: s, ten: 'a', con: [], the: {} } as T300);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g394 = <K extends keyof T394>(o: T394, k: K): U394<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U394<K>[K];
