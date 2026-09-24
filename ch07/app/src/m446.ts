import { f172, T172 } from './m172';
import { f440, T440 } from './m440';
import { f248, T248 } from './m248';
export interface T446 { id: number; ten: string; con: T446[]; the: Record<string, number> }
export type U446<K extends keyof T446> = { [P in K]: T446[P] extends number ? string : T446[P] };
export function f446(x: T446, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f446(c, 1);
  s += f172({ id: s, ten: 'a', con: [], the: {} } as T172);s += f440({ id: s, ten: 'a', con: [], the: {} } as T440);s += f248({ id: s, ten: 'a', con: [], the: {} } as T248);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g446 = <K extends keyof T446>(o: T446, k: K): U446<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U446<K>[K];
