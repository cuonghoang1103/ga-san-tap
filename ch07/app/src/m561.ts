import { f550, T550 } from './m550';
import { f400, T400 } from './m400';
import { f5, T5 } from './m005';
export interface T561 { id: number; ten: string; con: T561[]; the: Record<string, number> }
export type U561<K extends keyof T561> = { [P in K]: T561[P] extends number ? string : T561[P] };
export function f561(x: T561, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f561(c, 1);
  s += f550({ id: s, ten: 'a', con: [], the: {} } as T550);s += f400({ id: s, ten: 'a', con: [], the: {} } as T400);s += f5({ id: s, ten: 'a', con: [], the: {} } as T5);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g561 = <K extends keyof T561>(o: T561, k: K): U561<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U561<K>[K];
