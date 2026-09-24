import { f52, T52 } from './m052';
import { f45, T45 } from './m045';
import { f76, T76 } from './m076';
export interface T154 { id: number; ten: string; con: T154[]; the: Record<string, number> }
export type U154<K extends keyof T154> = { [P in K]: T154[P] extends number ? string : T154[P] };
export function f154(x: T154, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f154(c, 1);
  s += f52({ id: s, ten: 'a', con: [], the: {} } as T52);s += f45({ id: s, ten: 'a', con: [], the: {} } as T45);s += f76({ id: s, ten: 'a', con: [], the: {} } as T76);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g154 = <K extends keyof T154>(o: T154, k: K): U154<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U154<K>[K];
