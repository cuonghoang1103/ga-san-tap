import { f58, T58 } from './m058';
import { f35, T35 } from './m035';
import { f13, T13 } from './m013';
export interface T109 { id: number; ten: string; con: T109[]; the: Record<string, number> }
export type U109<K extends keyof T109> = { [P in K]: T109[P] extends number ? string : T109[P] };
export function f109(x: T109, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f109(c, 1);
  s += f58({ id: s, ten: 'a', con: [], the: {} } as T58);s += f35({ id: s, ten: 'a', con: [], the: {} } as T35);s += f13({ id: s, ten: 'a', con: [], the: {} } as T13);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g109 = <K extends keyof T109>(o: T109, k: K): U109<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U109<K>[K];
