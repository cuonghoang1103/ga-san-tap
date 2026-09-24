import { f256, T256 } from './m256';
import { f189, T189 } from './m189';
import { f50, T50 } from './m050';
export interface T322 { id: number; ten: string; con: T322[]; the: Record<string, number> }
export type U322<K extends keyof T322> = { [P in K]: T322[P] extends number ? string : T322[P] };
export function f322(x: T322, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f322(c, 1);
  s += f256({ id: s, ten: 'a', con: [], the: {} } as T256);s += f189({ id: s, ten: 'a', con: [], the: {} } as T189);s += f50({ id: s, ten: 'a', con: [], the: {} } as T50);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g322 = <K extends keyof T322>(o: T322, k: K): U322<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U322<K>[K];
