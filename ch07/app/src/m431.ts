import { f91, T91 } from './m091';
import { f245, T245 } from './m245';
import { f412, T412 } from './m412';
export interface T431 { id: number; ten: string; con: T431[]; the: Record<string, number> }
export type U431<K extends keyof T431> = { [P in K]: T431[P] extends number ? string : T431[P] };
export function f431(x: T431, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f431(c, 1);
  s += f91({ id: s, ten: 'a', con: [], the: {} } as T91);s += f245({ id: s, ten: 'a', con: [], the: {} } as T245);s += f412({ id: s, ten: 'a', con: [], the: {} } as T412);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g431 = <K extends keyof T431>(o: T431, k: K): U431<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U431<K>[K];
