import { f183, T183 } from './m183';
import { f115, T115 } from './m115';
import { f89, T89 } from './m089';
export interface T227 { id: number; ten: string; con: T227[]; the: Record<string, number> }
export type U227<K extends keyof T227> = { [P in K]: T227[P] extends number ? string : T227[P] };
export function f227(x: T227, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f227(c, 1);
  s += f183({ id: s, ten: 'a', con: [], the: {} } as T183);s += f115({ id: s, ten: 'a', con: [], the: {} } as T115);s += f89({ id: s, ten: 'a', con: [], the: {} } as T89);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g227 = <K extends keyof T227>(o: T227, k: K): U227<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U227<K>[K];
