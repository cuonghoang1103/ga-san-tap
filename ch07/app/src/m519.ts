import { f382, T382 } from './m382';
import { f70, T70 } from './m070';
import { f371, T371 } from './m371';
export interface T519 { id: number; ten: string; con: T519[]; the: Record<string, number> }
export type U519<K extends keyof T519> = { [P in K]: T519[P] extends number ? string : T519[P] };
export function f519(x: T519, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f519(c, 1);
  s += f382({ id: s, ten: 'a', con: [], the: {} } as T382);s += f70({ id: s, ten: 'a', con: [], the: {} } as T70);s += f371({ id: s, ten: 'a', con: [], the: {} } as T371);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g519 = <K extends keyof T519>(o: T519, k: K): U519<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U519<K>[K];
