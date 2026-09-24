import { f32, T32 } from './m032';
import { f22, T22 } from './m022';
import { f29, T29 } from './m029';
export interface T36 { id: number; ten: string; con: T36[]; the: Record<string, number> }
export type U36<K extends keyof T36> = { [P in K]: T36[P] extends number ? string : T36[P] };
export function f36(x: T36, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f36(c, 1);
  s += f32({ id: s, ten: 'a', con: [], the: {} } as T32);s += f22({ id: s, ten: 'a', con: [], the: {} } as T22);s += f29({ id: s, ten: 'a', con: [], the: {} } as T29);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g36 = <K extends keyof T36>(o: T36, k: K): U36<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U36<K>[K];
