import { f32, T32 } from './m032';
import { f16, T16 } from './m016';
import { f1, T1 } from './m001';
export interface T75 { id: number; ten: string; con: T75[]; the: Record<string, number> }
export type U75<K extends keyof T75> = { [P in K]: T75[P] extends number ? string : T75[P] };
export function f75(x: T75, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f75(c, 1);
  s += f32({ id: s, ten: 'a', con: [], the: {} } as T32);s += f16({ id: s, ten: 'a', con: [], the: {} } as T16);s += f1({ id: s, ten: 'a', con: [], the: {} } as T1);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g75 = <K extends keyof T75>(o: T75, k: K): U75<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U75<K>[K];
