import { f46, T46 } from './m046';
import { f32, T32 } from './m032';
import { f66, T66 } from './m066';
export interface T417 { id: number; ten: string; con: T417[]; the: Record<string, number> }
export type U417<K extends keyof T417> = { [P in K]: T417[P] extends number ? string : T417[P] };
export function f417(x: T417, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f417(c, 1);
  s += f46({ id: s, ten: 'a', con: [], the: {} } as T46);s += f32({ id: s, ten: 'a', con: [], the: {} } as T32);s += f66({ id: s, ten: 'a', con: [], the: {} } as T66);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g417 = <K extends keyof T417>(o: T417, k: K): U417<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U417<K>[K];
