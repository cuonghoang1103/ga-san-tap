import { f32, T32 } from './m032';
import { f91, T91 } from './m091';
import { f61, T61 } from './m061';
export interface T123 { id: number; ten: string; con: T123[]; the: Record<string, number> }
export type U123<K extends keyof T123> = { [P in K]: T123[P] extends number ? string : T123[P] };
export function f123(x: T123, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f123(c, 1);
  s += f32({ id: s, ten: 'a', con: [], the: {} } as T32);s += f91({ id: s, ten: 'a', con: [], the: {} } as T91);s += f61({ id: s, ten: 'a', con: [], the: {} } as T61);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g123 = <K extends keyof T123>(o: T123, k: K): U123<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U123<K>[K];
