import { f254, T254 } from './m254';
import { f201, T201 } from './m201';
import { f59, T59 } from './m059';
export interface T437 { id: number; ten: string; con: T437[]; the: Record<string, number> }
export type U437<K extends keyof T437> = { [P in K]: T437[P] extends number ? string : T437[P] };
export function f437(x: T437, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f437(c, 1);
  s += f254({ id: s, ten: 'a', con: [], the: {} } as T254);s += f201({ id: s, ten: 'a', con: [], the: {} } as T201);s += f59({ id: s, ten: 'a', con: [], the: {} } as T59);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g437 = <K extends keyof T437>(o: T437, k: K): U437<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U437<K>[K];
