import { f76, T76 } from './m076';
import { f64, T64 } from './m064';
import { f32, T32 } from './m032';
export interface T95 { id: number; ten: string; con: T95[]; the: Record<string, number> }
export type U95<K extends keyof T95> = { [P in K]: T95[P] extends number ? string : T95[P] };
export function f95(x: T95, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f95(c, 1);
  s += f76({ id: s, ten: 'a', con: [], the: {} } as T76);s += f64({ id: s, ten: 'a', con: [], the: {} } as T64);s += f32({ id: s, ten: 'a', con: [], the: {} } as T32);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g95 = <K extends keyof T95>(o: T95, k: K): U95<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U95<K>[K];
