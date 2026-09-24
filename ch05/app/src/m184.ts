import { f96, T96 } from './m096';
import { f45, T45 } from './m045';
import { f39, T39 } from './m039';
export interface T184 { id: number; ten: string; con: T184[]; the: Record<string, number> }
export type U184<K extends keyof T184> = { [P in K]: T184[P] extends number ? string : T184[P] };
export function f184(x: T184, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f184(c, 1);
  s += f96({ id: s, ten: 'a', con: [], the: {} } as T96);s += f45({ id: s, ten: 'a', con: [], the: {} } as T45);s += f39({ id: s, ten: 'a', con: [], the: {} } as T39);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g184 = <K extends keyof T184>(o: T184, k: K): U184<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U184<K>[K];
