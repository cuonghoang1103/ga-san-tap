import { f104, T104 } from './m104';
import { f30, T30 } from './m030';
import { f169, T169 } from './m169';
export interface T201 { id: number; ten: string; con: T201[]; the: Record<string, number> }
export type U201<K extends keyof T201> = { [P in K]: T201[P] extends number ? string : T201[P] };
export function f201(x: T201, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f201(c, 1);
  s += f104({ id: s, ten: 'a', con: [], the: {} } as T104);s += f30({ id: s, ten: 'a', con: [], the: {} } as T30);s += f169({ id: s, ten: 'a', con: [], the: {} } as T169);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g201 = <K extends keyof T201>(o: T201, k: K): U201<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U201<K>[K];
