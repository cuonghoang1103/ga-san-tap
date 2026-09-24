import { f18, T18 } from './m018';
import { f68, T68 } from './m068';
import { f141, T141 } from './m141';
export interface T143 { id: number; ten: string; con: T143[]; the: Record<string, number> }
export type U143<K extends keyof T143> = { [P in K]: T143[P] extends number ? string : T143[P] };
export function f143(x: T143, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f143(c, 1);
  s += f18({ id: s, ten: 'a', con: [], the: {} } as T18);s += f68({ id: s, ten: 'a', con: [], the: {} } as T68);s += f141({ id: s, ten: 'a', con: [], the: {} } as T141);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g143 = <K extends keyof T143>(o: T143, k: K): U143<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U143<K>[K];
