import { f138, T138 } from './m138';
import { f182, T182 } from './m182';
import { f118, T118 } from './m118';
export interface T269 { id: number; ten: string; con: T269[]; the: Record<string, number> }
export type U269<K extends keyof T269> = { [P in K]: T269[P] extends number ? string : T269[P] };
export function f269(x: T269, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f269(c, 1);
  s += f138({ id: s, ten: 'a', con: [], the: {} } as T138);s += f182({ id: s, ten: 'a', con: [], the: {} } as T182);s += f118({ id: s, ten: 'a', con: [], the: {} } as T118);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g269 = <K extends keyof T269>(o: T269, k: K): U269<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U269<K>[K];
