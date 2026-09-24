import { f134, T134 } from './m134';
import { f23, T23 } from './m023';
import { f65, T65 } from './m065';
export interface T191 { id: number; ten: string; con: T191[]; the: Record<string, number> }
export type U191<K extends keyof T191> = { [P in K]: T191[P] extends number ? string : T191[P] };
export function f191(x: T191, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f191(c, 1);
  s += f134({ id: s, ten: 'a', con: [], the: {} } as T134);s += f23({ id: s, ten: 'a', con: [], the: {} } as T23);s += f65({ id: s, ten: 'a', con: [], the: {} } as T65);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g191 = <K extends keyof T191>(o: T191, k: K): U191<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U191<K>[K];
