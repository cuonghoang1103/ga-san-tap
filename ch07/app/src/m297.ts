import { f147, T147 } from './m147';
import { f100, T100 } from './m100';
import { f204, T204 } from './m204';
export interface T297 { id: number; ten: string; con: T297[]; the: Record<string, number> }
export type U297<K extends keyof T297> = { [P in K]: T297[P] extends number ? string : T297[P] };
export function f297(x: T297, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f297(c, 1);
  s += f147({ id: s, ten: 'a', con: [], the: {} } as T147);s += f100({ id: s, ten: 'a', con: [], the: {} } as T100);s += f204({ id: s, ten: 'a', con: [], the: {} } as T204);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g297 = <K extends keyof T297>(o: T297, k: K): U297<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U297<K>[K];
