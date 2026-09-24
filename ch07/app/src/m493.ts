import { f293, T293 } from './m293';
import { f21, T21 } from './m021';
import { f177, T177 } from './m177';
export interface T493 { id: number; ten: string; con: T493[]; the: Record<string, number> }
export type U493<K extends keyof T493> = { [P in K]: T493[P] extends number ? string : T493[P] };
export function f493(x: T493, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f493(c, 1);
  s += f293({ id: s, ten: 'a', con: [], the: {} } as T293);s += f21({ id: s, ten: 'a', con: [], the: {} } as T21);s += f177({ id: s, ten: 'a', con: [], the: {} } as T177);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g493 = <K extends keyof T493>(o: T493, k: K): U493<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U493<K>[K];
