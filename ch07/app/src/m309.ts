import { f199, T199 } from './m199';
import { f168, T168 } from './m168';
import { f137, T137 } from './m137';
export interface T309 { id: number; ten: string; con: T309[]; the: Record<string, number> }
export type U309<K extends keyof T309> = { [P in K]: T309[P] extends number ? string : T309[P] };
export function f309(x: T309, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f309(c, 1);
  s += f199({ id: s, ten: 'a', con: [], the: {} } as T199);s += f168({ id: s, ten: 'a', con: [], the: {} } as T168);s += f137({ id: s, ten: 'a', con: [], the: {} } as T137);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g309 = <K extends keyof T309>(o: T309, k: K): U309<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U309<K>[K];
