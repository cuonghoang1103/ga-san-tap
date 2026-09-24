import { f567, T567 } from './m567';
import { f471, T471 } from './m471';
import { f400, T400 } from './m400';
export interface T591 { id: number; ten: string; con: T591[]; the: Record<string, number> }
export type U591<K extends keyof T591> = { [P in K]: T591[P] extends number ? string : T591[P] };
export function f591(x: T591, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f591(c, 1);
  s += f567({ id: s, ten: 'a', con: [], the: {} } as T567);s += f471({ id: s, ten: 'a', con: [], the: {} } as T471);s += f400({ id: s, ten: 'a', con: [], the: {} } as T400);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g591 = <K extends keyof T591>(o: T591, k: K): U591<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U591<K>[K];
