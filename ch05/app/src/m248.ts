import { f63, T63 } from './m063';
import { f163, T163 } from './m163';
import { f247, T247 } from './m247';
export interface T248 { id: number; ten: string; con: T248[]; the: Record<string, number> }
export type U248<K extends keyof T248> = { [P in K]: T248[P] extends number ? string : T248[P] };
export function f248(x: T248, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f248(c, 1);
  s += f63({ id: s, ten: 'a', con: [], the: {} } as T63);s += f163({ id: s, ten: 'a', con: [], the: {} } as T163);s += f247({ id: s, ten: 'a', con: [], the: {} } as T247);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g248 = <K extends keyof T248>(o: T248, k: K): U248<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U248<K>[K];
