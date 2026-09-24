import { f272, T272 } from './m272';
import { f16, T16 } from './m016';
import { f226, T226 } from './m226';
export interface T324 { id: number; ten: string; con: T324[]; the: Record<string, number> }
export type U324<K extends keyof T324> = { [P in K]: T324[P] extends number ? string : T324[P] };
export function f324(x: T324, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f324(c, 1);
  s += f272({ id: s, ten: 'a', con: [], the: {} } as T272);s += f16({ id: s, ten: 'a', con: [], the: {} } as T16);s += f226({ id: s, ten: 'a', con: [], the: {} } as T226);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g324 = <K extends keyof T324>(o: T324, k: K): U324<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U324<K>[K];
