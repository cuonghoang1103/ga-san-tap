import { f31, T31 } from './m031';
import { f180, T180 } from './m180';
import { f280, T280 } from './m280';
export interface T314 { id: number; ten: string; con: T314[]; the: Record<string, number> }
export type U314<K extends keyof T314> = { [P in K]: T314[P] extends number ? string : T314[P] };
export function f314(x: T314, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f314(c, 1);
  s += f31({ id: s, ten: 'a', con: [], the: {} } as T31);s += f180({ id: s, ten: 'a', con: [], the: {} } as T180);s += f280({ id: s, ten: 'a', con: [], the: {} } as T280);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g314 = <K extends keyof T314>(o: T314, k: K): U314<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U314<K>[K];
