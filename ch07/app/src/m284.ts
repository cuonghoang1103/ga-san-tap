import { f28, T28 } from './m028';
import { f11, T11 } from './m011';
import { f110, T110 } from './m110';
export interface T284 { id: number; ten: string; con: T284[]; the: Record<string, number> }
export type U284<K extends keyof T284> = { [P in K]: T284[P] extends number ? string : T284[P] };
export function f284(x: T284, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f284(c, 1);
  s += f28({ id: s, ten: 'a', con: [], the: {} } as T28);s += f11({ id: s, ten: 'a', con: [], the: {} } as T11);s += f110({ id: s, ten: 'a', con: [], the: {} } as T110);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g284 = <K extends keyof T284>(o: T284, k: K): U284<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U284<K>[K];
