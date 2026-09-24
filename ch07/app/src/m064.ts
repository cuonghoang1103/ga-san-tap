import { f32, T32 } from './m032';
import { f26, T26 } from './m026';
import { f55, T55 } from './m055';
export interface T64 { id: number; ten: string; con: T64[]; the: Record<string, number> }
export type U64<K extends keyof T64> = { [P in K]: T64[P] extends number ? string : T64[P] };
export function f64(x: T64, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f64(c, 1);
  s += f32({ id: s, ten: 'a', con: [], the: {} } as T32);s += f26({ id: s, ten: 'a', con: [], the: {} } as T26);s += f55({ id: s, ten: 'a', con: [], the: {} } as T55);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g64 = <K extends keyof T64>(o: T64, k: K): U64<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U64<K>[K];
