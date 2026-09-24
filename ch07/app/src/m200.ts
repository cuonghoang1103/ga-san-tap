import { f110, T110 } from './m110';
import { f153, T153 } from './m153';
import { f136, T136 } from './m136';
export interface T200 { id: number; ten: string; con: T200[]; the: Record<string, number> }
export type U200<K extends keyof T200> = { [P in K]: T200[P] extends number ? string : T200[P] };
export function f200(x: T200, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f200(c, 1);
  s += f110({ id: s, ten: 'a', con: [], the: {} } as T110);s += f153({ id: s, ten: 'a', con: [], the: {} } as T153);s += f136({ id: s, ten: 'a', con: [], the: {} } as T136);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g200 = <K extends keyof T200>(o: T200, k: K): U200<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U200<K>[K];
