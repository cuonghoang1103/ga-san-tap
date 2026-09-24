import { f72, T72 } from './m072';
import { f68, T68 } from './m068';
import { f14, T14 } from './m014';
export interface T108 { id: number; ten: string; con: T108[]; the: Record<string, number> }
export type U108<K extends keyof T108> = { [P in K]: T108[P] extends number ? string : T108[P] };
export function f108(x: T108, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f108(c, 1);
  s += f72({ id: s, ten: 'a', con: [], the: {} } as T72);s += f68({ id: s, ten: 'a', con: [], the: {} } as T68);s += f14({ id: s, ten: 'a', con: [], the: {} } as T14);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g108 = <K extends keyof T108>(o: T108, k: K): U108<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U108<K>[K];
