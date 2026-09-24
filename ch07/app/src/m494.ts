import { f39, T39 } from './m039';
import { f47, T47 } from './m047';
import { f371, T371 } from './m371';
export interface T494 { id: number; ten: string; con: T494[]; the: Record<string, number> }
export type U494<K extends keyof T494> = { [P in K]: T494[P] extends number ? string : T494[P] };
export function f494(x: T494, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f494(c, 1);
  s += f39({ id: s, ten: 'a', con: [], the: {} } as T39);s += f47({ id: s, ten: 'a', con: [], the: {} } as T47);s += f371({ id: s, ten: 'a', con: [], the: {} } as T371);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g494 = <K extends keyof T494>(o: T494, k: K): U494<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U494<K>[K];
