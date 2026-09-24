import { f76, T76 } from './m076';
import { f145, T145 } from './m145';
import { f221, T221 } from './m221';
export interface T522 { id: number; ten: string; con: T522[]; the: Record<string, number> }
export type U522<K extends keyof T522> = { [P in K]: T522[P] extends number ? string : T522[P] };
export function f522(x: T522, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f522(c, 1);
  s += f76({ id: s, ten: 'a', con: [], the: {} } as T76);s += f145({ id: s, ten: 'a', con: [], the: {} } as T145);s += f221({ id: s, ten: 'a', con: [], the: {} } as T221);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g522 = <K extends keyof T522>(o: T522, k: K): U522<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U522<K>[K];
