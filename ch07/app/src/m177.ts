import { f130, T130 } from './m130';
import { f165, T165 } from './m165';
import { f94, T94 } from './m094';
export interface T177 { id: number; ten: string; con: T177[]; the: Record<string, number> }
export type U177<K extends keyof T177> = { [P in K]: T177[P] extends number ? string : T177[P] };
export function f177(x: T177, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f177(c, 1);
  s += f130({ id: s, ten: 'a', con: [], the: {} } as T130);s += f165({ id: s, ten: 'a', con: [], the: {} } as T165);s += f94({ id: s, ten: 'a', con: [], the: {} } as T94);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g177 = <K extends keyof T177>(o: T177, k: K): U177<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U177<K>[K];
