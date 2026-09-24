import { f24, T24 } from './m024';
import { f32, T32 } from './m032';
import { f8, T8 } from './m008';
export interface T38 { id: number; ten: string; con: T38[]; the: Record<string, number> }
export type U38<K extends keyof T38> = { [P in K]: T38[P] extends number ? string : T38[P] };
export function f38(x: T38, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f38(c, 1);
  s += f24({ id: s, ten: 'a', con: [], the: {} } as T24);s += f32({ id: s, ten: 'a', con: [], the: {} } as T32);s += f8({ id: s, ten: 'a', con: [], the: {} } as T8);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g38 = <K extends keyof T38>(o: T38, k: K): U38<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U38<K>[K];
