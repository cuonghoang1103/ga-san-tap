import { f407, T407 } from './m407';
import { f476, T476 } from './m476';
import { f121, T121 } from './m121';
export interface T570 { id: number; ten: string; con: T570[]; the: Record<string, number> }
export type U570<K extends keyof T570> = { [P in K]: T570[P] extends number ? string : T570[P] };
export function f570(x: T570, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f570(c, 1);
  s += f407({ id: s, ten: 'a', con: [], the: {} } as T407);s += f476({ id: s, ten: 'a', con: [], the: {} } as T476);s += f121({ id: s, ten: 'a', con: [], the: {} } as T121);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g570 = <K extends keyof T570>(o: T570, k: K): U570<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U570<K>[K];
