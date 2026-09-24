import { f231, T231 } from './m231';
import { f143, T143 } from './m143';
import { f245, T245 } from './m245';
export interface T351 { id: number; ten: string; con: T351[]; the: Record<string, number> }
export type U351<K extends keyof T351> = { [P in K]: T351[P] extends number ? string : T351[P] };
export function f351(x: T351, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f351(c, 1);
  s += f231({ id: s, ten: 'a', con: [], the: {} } as T231);s += f143({ id: s, ten: 'a', con: [], the: {} } as T143);s += f245({ id: s, ten: 'a', con: [], the: {} } as T245);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g351 = <K extends keyof T351>(o: T351, k: K): U351<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U351<K>[K];
