import { f29, T29 } from './m029';
import { f38, T38 } from './m038';
import { f1, T1 } from './m001';
export interface T46 { id: number; ten: string; con: T46[]; the: Record<string, number> }
export type U46<K extends keyof T46> = { [P in K]: T46[P] extends number ? string : T46[P] };
export function f46(x: T46, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f46(c, 1);
  s += f29({ id: s, ten: 'a', con: [], the: {} } as T29);s += f38({ id: s, ten: 'a', con: [], the: {} } as T38);s += f1({ id: s, ten: 'a', con: [], the: {} } as T1);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g46 = <K extends keyof T46>(o: T46, k: K): U46<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U46<K>[K];
