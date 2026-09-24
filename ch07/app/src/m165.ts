import { f32, T32 } from './m032';
import { f35, T35 } from './m035';
import { f66, T66 } from './m066';
export interface T165 { id: number; ten: string; con: T165[]; the: Record<string, number> }
export type U165<K extends keyof T165> = { [P in K]: T165[P] extends number ? string : T165[P] };
export function f165(x: T165, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f165(c, 1);
  s += f32({ id: s, ten: 'a', con: [], the: {} } as T32);s += f35({ id: s, ten: 'a', con: [], the: {} } as T35);s += f66({ id: s, ten: 'a', con: [], the: {} } as T66);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g165 = <K extends keyof T165>(o: T165, k: K): U165<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U165<K>[K];
