import { f150, T150 } from './m150';
import { f349, T349 } from './m349';
import { f260, T260 } from './m260';
export interface T436 { id: number; ten: string; con: T436[]; the: Record<string, number> }
export type U436<K extends keyof T436> = { [P in K]: T436[P] extends number ? string : T436[P] };
export function f436(x: T436, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f436(c, 1);
  s += f150({ id: s, ten: 'a', con: [], the: {} } as T150);s += f349({ id: s, ten: 'a', con: [], the: {} } as T349);s += f260({ id: s, ten: 'a', con: [], the: {} } as T260);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g436 = <K extends keyof T436>(o: T436, k: K): U436<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U436<K>[K];
