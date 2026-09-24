import { f86, T86 } from './m086';
import { f143, T143 } from './m143';
import { f156, T156 } from './m156';
export interface T174 { id: number; ten: string; con: T174[]; the: Record<string, number> }
export type U174<K extends keyof T174> = { [P in K]: T174[P] extends number ? string : T174[P] };
export function f174(x: T174, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f174(c, 1);
  s += f86({ id: s, ten: 'a', con: [], the: {} } as T86);s += f143({ id: s, ten: 'a', con: [], the: {} } as T143);s += f156({ id: s, ten: 'a', con: [], the: {} } as T156);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g174 = <K extends keyof T174>(o: T174, k: K): U174<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U174<K>[K];
