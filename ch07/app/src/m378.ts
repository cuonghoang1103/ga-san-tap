import { f131, T131 } from './m131';
import { f208, T208 } from './m208';
import { f103, T103 } from './m103';
export interface T378 { id: number; ten: string; con: T378[]; the: Record<string, number> }
export type U378<K extends keyof T378> = { [P in K]: T378[P] extends number ? string : T378[P] };
export function f378(x: T378, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f378(c, 1);
  s += f131({ id: s, ten: 'a', con: [], the: {} } as T131);s += f208({ id: s, ten: 'a', con: [], the: {} } as T208);s += f103({ id: s, ten: 'a', con: [], the: {} } as T103);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g378 = <K extends keyof T378>(o: T378, k: K): U378<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U378<K>[K];
