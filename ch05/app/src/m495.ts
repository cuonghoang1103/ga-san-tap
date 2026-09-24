import { f52, T52 } from './m052';
import { f153, T153 } from './m153';
import { f162, T162 } from './m162';
export interface T495 { id: number; ten: string; con: T495[]; the: Record<string, number> }
export type U495<K extends keyof T495> = { [P in K]: T495[P] extends number ? string : T495[P] };
export function f495(x: T495, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f495(c, 1);
  s += f52({ id: s, ten: 'a', con: [], the: {} } as T52);s += f153({ id: s, ten: 'a', con: [], the: {} } as T153);s += f162({ id: s, ten: 'a', con: [], the: {} } as T162);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g495 = <K extends keyof T495>(o: T495, k: K): U495<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U495<K>[K];
