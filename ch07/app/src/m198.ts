import { f112, T112 } from './m112';
import { f32, T32 } from './m032';
import { f159, T159 } from './m159';
export interface T198 { id: number; ten: string; con: T198[]; the: Record<string, number> }
export type U198<K extends keyof T198> = { [P in K]: T198[P] extends number ? string : T198[P] };
export function f198(x: T198, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f198(c, 1);
  s += f112({ id: s, ten: 'a', con: [], the: {} } as T112);s += f32({ id: s, ten: 'a', con: [], the: {} } as T32);s += f159({ id: s, ten: 'a', con: [], the: {} } as T159);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g198 = <K extends keyof T198>(o: T198, k: K): U198<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U198<K>[K];
