import { f246, T246 } from './m246';
import { f371, T371 } from './m371';
import { f37, T37 } from './m037';
export interface T377 { id: number; ten: string; con: T377[]; the: Record<string, number> }
export type U377<K extends keyof T377> = { [P in K]: T377[P] extends number ? string : T377[P] };
export function f377(x: T377, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f377(c, 1);
  s += f246({ id: s, ten: 'a', con: [], the: {} } as T246);s += f371({ id: s, ten: 'a', con: [], the: {} } as T371);s += f37({ id: s, ten: 'a', con: [], the: {} } as T37);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g377 = <K extends keyof T377>(o: T377, k: K): U377<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U377<K>[K];
