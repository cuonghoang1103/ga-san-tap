import { f143, T143 } from './m143';
import { f245, T245 } from './m245';
import { f356, T356 } from './m356';
export interface T460 { id: number; ten: string; con: T460[]; the: Record<string, number> }
export type U460<K extends keyof T460> = { [P in K]: T460[P] extends number ? string : T460[P] };
export function f460(x: T460, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f460(c, 1);
  s += f143({ id: s, ten: 'a', con: [], the: {} } as T143);s += f245({ id: s, ten: 'a', con: [], the: {} } as T245);s += f356({ id: s, ten: 'a', con: [], the: {} } as T356);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g460 = <K extends keyof T460>(o: T460, k: K): U460<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U460<K>[K];
