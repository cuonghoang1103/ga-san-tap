import { f113, T113 } from './m113';
import { f132, T132 } from './m132';
import { f125, T125 } from './m125';
export interface T272 { id: number; ten: string; con: T272[]; the: Record<string, number> }
export type U272<K extends keyof T272> = { [P in K]: T272[P] extends number ? string : T272[P] };
export function f272(x: T272, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f272(c, 1);
  s += f113({ id: s, ten: 'a', con: [], the: {} } as T113);s += f132({ id: s, ten: 'a', con: [], the: {} } as T132);s += f125({ id: s, ten: 'a', con: [], the: {} } as T125);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g272 = <K extends keyof T272>(o: T272, k: K): U272<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U272<K>[K];
