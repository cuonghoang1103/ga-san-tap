import { f281, T281 } from './m281';
import { f20, T20 } from './m020';
import { f256, T256 } from './m256';
export interface T516 { id: number; ten: string; con: T516[]; the: Record<string, number> }
export type U516<K extends keyof T516> = { [P in K]: T516[P] extends number ? string : T516[P] };
export function f516(x: T516, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f516(c, 1);
  s += f281({ id: s, ten: 'a', con: [], the: {} } as T281);s += f20({ id: s, ten: 'a', con: [], the: {} } as T20);s += f256({ id: s, ten: 'a', con: [], the: {} } as T256);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g516 = <K extends keyof T516>(o: T516, k: K): U516<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U516<K>[K];
