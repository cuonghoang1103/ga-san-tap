import { f257, T257 } from './m257';
import { f290, T290 } from './m290';
import { f337, T337 } from './m337';
export interface T480 { id: number; ten: string; con: T480[]; the: Record<string, number> }
export type U480<K extends keyof T480> = { [P in K]: T480[P] extends number ? string : T480[P] };
export function f480(x: T480, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f480(c, 1);
  s += f257({ id: s, ten: 'a', con: [], the: {} } as T257);s += f290({ id: s, ten: 'a', con: [], the: {} } as T290);s += f337({ id: s, ten: 'a', con: [], the: {} } as T337);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g480 = <K extends keyof T480>(o: T480, k: K): U480<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U480<K>[K];
