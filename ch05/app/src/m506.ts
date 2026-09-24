import { f404, T404 } from './m404';
import { f328, T328 } from './m328';
import { f370, T370 } from './m370';
export interface T506 { id: number; ten: string; con: T506[]; the: Record<string, number> }
export type U506<K extends keyof T506> = { [P in K]: T506[P] extends number ? string : T506[P] };
export function f506(x: T506, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f506(c, 1);
  s += f404({ id: s, ten: 'a', con: [], the: {} } as T404);s += f328({ id: s, ten: 'a', con: [], the: {} } as T328);s += f370({ id: s, ten: 'a', con: [], the: {} } as T370);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g506 = <K extends keyof T506>(o: T506, k: K): U506<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U506<K>[K];
