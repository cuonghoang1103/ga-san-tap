import { f12, T12 } from './m012';
import { f26, T26 } from './m026';
import { f73, T73 } from './m073';
export interface T80 { id: number; ten: string; con: T80[]; the: Record<string, number> }
export type U80<K extends keyof T80> = { [P in K]: T80[P] extends number ? string : T80[P] };
export function f80(x: T80, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f80(c, 1);
  s += f12({ id: s, ten: 'a', con: [], the: {} } as T12);s += f26({ id: s, ten: 'a', con: [], the: {} } as T26);s += f73({ id: s, ten: 'a', con: [], the: {} } as T73);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g80 = <K extends keyof T80>(o: T80, k: K): U80<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U80<K>[K];
