import { f153, T153 } from './m153';
import { f213, T213 } from './m213';
import { f132, T132 } from './m132';
export interface T237 { id: number; ten: string; con: T237[]; the: Record<string, number> }
export type U237<K extends keyof T237> = { [P in K]: T237[P] extends number ? string : T237[P] };
export function f237(x: T237, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f237(c, 1);
  s += f153({ id: s, ten: 'a', con: [], the: {} } as T153);s += f213({ id: s, ten: 'a', con: [], the: {} } as T213);s += f132({ id: s, ten: 'a', con: [], the: {} } as T132);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g237 = <K extends keyof T237>(o: T237, k: K): U237<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U237<K>[K];
