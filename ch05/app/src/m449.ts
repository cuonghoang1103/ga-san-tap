import { f362, T362 } from './m362';
import { f136, T136 } from './m136';
import { f28, T28 } from './m028';
export interface T449 { id: number; ten: string; con: T449[]; the: Record<string, number> }
export type U449<K extends keyof T449> = { [P in K]: T449[P] extends number ? string : T449[P] };
export function f449(x: T449, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f449(c, 1);
  s += f362({ id: s, ten: 'a', con: [], the: {} } as T362);s += f136({ id: s, ten: 'a', con: [], the: {} } as T136);s += f28({ id: s, ten: 'a', con: [], the: {} } as T28);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g449 = <K extends keyof T449>(o: T449, k: K): U449<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U449<K>[K];
