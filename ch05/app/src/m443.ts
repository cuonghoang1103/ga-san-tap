import { f147, T147 } from './m147';
import { f252, T252 } from './m252';
import { f324, T324 } from './m324';
export interface T443 { id: number; ten: string; con: T443[]; the: Record<string, number> }
export type U443<K extends keyof T443> = { [P in K]: T443[P] extends number ? string : T443[P] };
export function f443(x: T443, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f443(c, 1);
  s += f147({ id: s, ten: 'a', con: [], the: {} } as T147);s += f252({ id: s, ten: 'a', con: [], the: {} } as T252);s += f324({ id: s, ten: 'a', con: [], the: {} } as T324);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g443 = <K extends keyof T443>(o: T443, k: K): U443<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U443<K>[K];
