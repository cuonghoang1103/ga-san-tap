import { f392, T392 } from './m392';
import { f178, T178 } from './m178';
import { f406, T406 } from './m406';
export interface T547 { id: number; ten: string; con: T547[]; the: Record<string, number> }
export type U547<K extends keyof T547> = { [P in K]: T547[P] extends number ? string : T547[P] };
export function f547(x: T547, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f547(c, 1);
  s += f392({ id: s, ten: 'a', con: [], the: {} } as T392);s += f178({ id: s, ten: 'a', con: [], the: {} } as T178);s += f406({ id: s, ten: 'a', con: [], the: {} } as T406);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g547 = <K extends keyof T547>(o: T547, k: K): U547<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U547<K>[K];
