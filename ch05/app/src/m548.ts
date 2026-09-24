import { f233, T233 } from './m233';
import { f102, T102 } from './m102';
import { f254, T254 } from './m254';
export interface T548 { id: number; ten: string; con: T548[]; the: Record<string, number> }
export type U548<K extends keyof T548> = { [P in K]: T548[P] extends number ? string : T548[P] };
export function f548(x: T548, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f548(c, 1);
  s += f233({ id: s, ten: 'a', con: [], the: {} } as T233);s += f102({ id: s, ten: 'a', con: [], the: {} } as T102);s += f254({ id: s, ten: 'a', con: [], the: {} } as T254);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g548 = <K extends keyof T548>(o: T548, k: K): U548<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U548<K>[K];
