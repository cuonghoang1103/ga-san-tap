import { f169, T169 } from './m169';
import { f173, T173 } from './m173';
import { f260, T260 } from './m260';
export interface T334 { id: number; ten: string; con: T334[]; the: Record<string, number> }
export type U334<K extends keyof T334> = { [P in K]: T334[P] extends number ? string : T334[P] };
export function f334(x: T334, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f334(c, 1);
  s += f169({ id: s, ten: 'a', con: [], the: {} } as T169);s += f173({ id: s, ten: 'a', con: [], the: {} } as T173);s += f260({ id: s, ten: 'a', con: [], the: {} } as T260);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g334 = <K extends keyof T334>(o: T334, k: K): U334<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U334<K>[K];
