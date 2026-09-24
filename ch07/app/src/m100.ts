import { f13, T13 } from './m013';
import { f41, T41 } from './m041';
import { f5, T5 } from './m005';
export interface T100 { id: number; ten: string; con: T100[]; the: Record<string, number> }
export type U100<K extends keyof T100> = { [P in K]: T100[P] extends number ? string : T100[P] };
export function f100(x: T100, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f100(c, 1);
  s += f13({ id: s, ten: 'a', con: [], the: {} } as T13);s += f41({ id: s, ten: 'a', con: [], the: {} } as T41);s += f5({ id: s, ten: 'a', con: [], the: {} } as T5);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g100 = <K extends keyof T100>(o: T100, k: K): U100<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U100<K>[K];
