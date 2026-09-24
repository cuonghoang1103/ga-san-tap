import { f181, T181 } from './m181';
import { f74, T74 } from './m074';
import { f212, T212 } from './m212';
export interface T407 { id: number; ten: string; con: T407[]; the: Record<string, number> }
export type U407<K extends keyof T407> = { [P in K]: T407[P] extends number ? string : T407[P] };
export function f407(x: T407, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f407(c, 1);
  s += f181({ id: s, ten: 'a', con: [], the: {} } as T181);s += f74({ id: s, ten: 'a', con: [], the: {} } as T74);s += f212({ id: s, ten: 'a', con: [], the: {} } as T212);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g407 = <K extends keyof T407>(o: T407, k: K): U407<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U407<K>[K];
