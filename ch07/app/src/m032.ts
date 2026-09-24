import { f30, T30 } from './m030';
import { f2, T2 } from './m002';
import { f19, T19 } from './m019';
export interface T32 { id: number; ten: string; con: T32[]; the: Record<string, number> }
export type U32<K extends keyof T32> = { [P in K]: T32[P] extends number ? string : T32[P] };
export function f32(x: T32, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f32(c, 1);
  s += f30({ id: s, ten: 'a', con: [], the: {} } as T30);s += f2({ id: s, ten: 'a', con: [], the: {} } as T2);s += f19({ id: s, ten: 'a', con: [], the: {} } as T19);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g32 = <K extends keyof T32>(o: T32, k: K): U32<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U32<K>[K];
