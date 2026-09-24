import { f152, T152 } from './m152';
import { f21, T21 } from './m021';
import { f31, T31 } from './m031';
export interface T182 { id: number; ten: string; con: T182[]; the: Record<string, number> }
export type U182<K extends keyof T182> = { [P in K]: T182[P] extends number ? string : T182[P] };
export function f182(x: T182, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f182(c, 1);
  s += f152({ id: s, ten: 'a', con: [], the: {} } as T152);s += f21({ id: s, ten: 'a', con: [], the: {} } as T21);s += f31({ id: s, ten: 'a', con: [], the: {} } as T31);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g182 = <K extends keyof T182>(o: T182, k: K): U182<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U182<K>[K];
