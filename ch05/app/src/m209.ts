import { f138, T138 } from './m138';
import { f51, T51 } from './m051';
import { f69, T69 } from './m069';
export interface T209 { id: number; ten: string; con: T209[]; the: Record<string, number> }
export type U209<K extends keyof T209> = { [P in K]: T209[P] extends number ? string : T209[P] };
export function f209(x: T209, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f209(c, 1);
  s += f138({ id: s, ten: 'a', con: [], the: {} } as T138);s += f51({ id: s, ten: 'a', con: [], the: {} } as T51);s += f69({ id: s, ten: 'a', con: [], the: {} } as T69);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g209 = <K extends keyof T209>(o: T209, k: K): U209<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U209<K>[K];
