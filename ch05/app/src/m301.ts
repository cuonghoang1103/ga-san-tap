import { f194, T194 } from './m194';
import { f130, T130 } from './m130';
import { f66, T66 } from './m066';
export interface T301 { id: number; ten: string; con: T301[]; the: Record<string, number> }
export type U301<K extends keyof T301> = { [P in K]: T301[P] extends number ? string : T301[P] };
export function f301(x: T301, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f301(c, 1);
  s += f194({ id: s, ten: 'a', con: [], the: {} } as T194);s += f130({ id: s, ten: 'a', con: [], the: {} } as T130);s += f66({ id: s, ten: 'a', con: [], the: {} } as T66);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g301 = <K extends keyof T301>(o: T301, k: K): U301<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U301<K>[K];
