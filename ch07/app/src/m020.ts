import { f6, T6 } from './m006';
import { f9, T9 } from './m009';
import { f18, T18 } from './m018';
export interface T20 { id: number; ten: string; con: T20[]; the: Record<string, number> }
export type U20<K extends keyof T20> = { [P in K]: T20[P] extends number ? string : T20[P] };
export function f20(x: T20, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f20(c, 1);
  s += f6({ id: s, ten: 'a', con: [], the: {} } as T6);s += f9({ id: s, ten: 'a', con: [], the: {} } as T9);s += f18({ id: s, ten: 'a', con: [], the: {} } as T18);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g20 = <K extends keyof T20>(o: T20, k: K): U20<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U20<K>[K];
