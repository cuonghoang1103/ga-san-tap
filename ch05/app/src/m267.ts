import { f188, T188 } from './m188';
import { f239, T239 } from './m239';
import { f261, T261 } from './m261';
export interface T267 { id: number; ten: string; con: T267[]; the: Record<string, number> }
export type U267<K extends keyof T267> = { [P in K]: T267[P] extends number ? string : T267[P] };
export function f267(x: T267, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f267(c, 1);
  s += f188({ id: s, ten: 'a', con: [], the: {} } as T188);s += f239({ id: s, ten: 'a', con: [], the: {} } as T239);s += f261({ id: s, ten: 'a', con: [], the: {} } as T261);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g267 = <K extends keyof T267>(o: T267, k: K): U267<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U267<K>[K];
