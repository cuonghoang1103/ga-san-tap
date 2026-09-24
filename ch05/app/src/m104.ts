import { f75, T75 } from './m075';
import { f100, T100 } from './m100';
import { f48, T48 } from './m048';
export interface T104 { id: number; ten: string; con: T104[]; the: Record<string, number> }
export type U104<K extends keyof T104> = { [P in K]: T104[P] extends number ? string : T104[P] };
export function f104(x: T104, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f104(c, 1);
  s += f75({ id: s, ten: 'a', con: [], the: {} } as T75);s += f100({ id: s, ten: 'a', con: [], the: {} } as T100);s += f48({ id: s, ten: 'a', con: [], the: {} } as T48);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g104 = <K extends keyof T104>(o: T104, k: K): U104<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U104<K>[K];
