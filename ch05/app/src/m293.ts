import { f132, T132 } from './m132';
import { f169, T169 } from './m169';
import { f254, T254 } from './m254';
export interface T293 { id: number; ten: string; con: T293[]; the: Record<string, number> }
export type U293<K extends keyof T293> = { [P in K]: T293[P] extends number ? string : T293[P] };
export function f293(x: T293, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f293(c, 1);
  s += f132({ id: s, ten: 'a', con: [], the: {} } as T132);s += f169({ id: s, ten: 'a', con: [], the: {} } as T169);s += f254({ id: s, ten: 'a', con: [], the: {} } as T254);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g293 = <K extends keyof T293>(o: T293, k: K): U293<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U293<K>[K];
