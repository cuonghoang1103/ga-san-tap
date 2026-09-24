import { f12, T12 } from './m012';
import { f32, T32 } from './m032';
import { f26, T26 } from './m026';
export interface T42 { id: number; ten: string; con: T42[]; the: Record<string, number> }
export type U42<K extends keyof T42> = { [P in K]: T42[P] extends number ? string : T42[P] };
export function f42(x: T42, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f42(c, 1);
  s += f12({ id: s, ten: 'a', con: [], the: {} } as T12);s += f32({ id: s, ten: 'a', con: [], the: {} } as T32);s += f26({ id: s, ten: 'a', con: [], the: {} } as T26);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g42 = <K extends keyof T42>(o: T42, k: K): U42<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U42<K>[K];
