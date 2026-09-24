import { f414, T414 } from './m414';
import { f278, T278 } from './m278';
import { f109, T109 } from './m109';
export interface T444 { id: number; ten: string; con: T444[]; the: Record<string, number> }
export type U444<K extends keyof T444> = { [P in K]: T444[P] extends number ? string : T444[P] };
export function f444(x: T444, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f444(c, 1);
  s += f414({ id: s, ten: 'a', con: [], the: {} } as T414);s += f278({ id: s, ten: 'a', con: [], the: {} } as T278);s += f109({ id: s, ten: 'a', con: [], the: {} } as T109);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g444 = <K extends keyof T444>(o: T444, k: K): U444<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U444<K>[K];
