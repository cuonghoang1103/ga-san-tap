import { f160, T160 } from './m160';
import { f25, T25 } from './m025';
import { f68, T68 } from './m068';
export interface T192 { id: number; ten: string; con: T192[]; the: Record<string, number> }
export type U192<K extends keyof T192> = { [P in K]: T192[P] extends number ? string : T192[P] };
export function f192(x: T192, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f192(c, 1);
  s += f160({ id: s, ten: 'a', con: [], the: {} } as T160);s += f25({ id: s, ten: 'a', con: [], the: {} } as T25);s += f68({ id: s, ten: 'a', con: [], the: {} } as T68);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g192 = <K extends keyof T192>(o: T192, k: K): U192<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U192<K>[K];
