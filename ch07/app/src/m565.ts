import { f164, T164 } from './m164';
import { f179, T179 } from './m179';
import { f384, T384 } from './m384';
export interface T565 { id: number; ten: string; con: T565[]; the: Record<string, number> }
export type U565<K extends keyof T565> = { [P in K]: T565[P] extends number ? string : T565[P] };
export function f565(x: T565, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f565(c, 1);
  s += f164({ id: s, ten: 'a', con: [], the: {} } as T164);s += f179({ id: s, ten: 'a', con: [], the: {} } as T179);s += f384({ id: s, ten: 'a', con: [], the: {} } as T384);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g565 = <K extends keyof T565>(o: T565, k: K): U565<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U565<K>[K];
