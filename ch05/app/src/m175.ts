import { f167, T167 } from './m167';
import { f70, T70 } from './m070';
import { f165, T165 } from './m165';
export interface T175 { id: number; ten: string; con: T175[]; the: Record<string, number> }
export type U175<K extends keyof T175> = { [P in K]: T175[P] extends number ? string : T175[P] };
export function f175(x: T175, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f175(c, 1);
  s += f167({ id: s, ten: 'a', con: [], the: {} } as T167);s += f70({ id: s, ten: 'a', con: [], the: {} } as T70);s += f165({ id: s, ten: 'a', con: [], the: {} } as T165);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g175 = <K extends keyof T175>(o: T175, k: K): U175<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U175<K>[K];
