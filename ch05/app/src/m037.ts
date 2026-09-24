import { f17, T17 } from './m017';
import { f35, T35 } from './m035';
import { f0, T0 } from './m000';
export interface T37 { id: number; ten: string; con: T37[]; the: Record<string, number> }
export type U37<K extends keyof T37> = { [P in K]: T37[P] extends number ? string : T37[P] };
export function f37(x: T37, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f37(c, 1);
  s += f17({ id: s, ten: 'a', con: [], the: {} } as T17);s += f35({ id: s, ten: 'a', con: [], the: {} } as T35);s += f0({ id: s, ten: 'a', con: [], the: {} } as T0);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g37 = <K extends keyof T37>(o: T37, k: K): U37<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U37<K>[K];
