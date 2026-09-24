import { f7, T7 } from './m007';
import { f18, T18 } from './m018';
import { f274, T274 } from './m274';
export interface T303 { id: number; ten: string; con: T303[]; the: Record<string, number> }
export type U303<K extends keyof T303> = { [P in K]: T303[P] extends number ? string : T303[P] };
export function f303(x: T303, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f303(c, 1);
  s += f7({ id: s, ten: 'a', con: [], the: {} } as T7);s += f18({ id: s, ten: 'a', con: [], the: {} } as T18);s += f274({ id: s, ten: 'a', con: [], the: {} } as T274);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g303 = <K extends keyof T303>(o: T303, k: K): U303<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U303<K>[K];
