import { f318, T318 } from './m318';
import { f252, T252 } from './m252';
import { f245, T245 } from './m245';
export interface T472 { id: number; ten: string; con: T472[]; the: Record<string, number> }
export type U472<K extends keyof T472> = { [P in K]: T472[P] extends number ? string : T472[P] };
export function f472(x: T472, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f472(c, 1);
  s += f318({ id: s, ten: 'a', con: [], the: {} } as T318);s += f252({ id: s, ten: 'a', con: [], the: {} } as T252);s += f245({ id: s, ten: 'a', con: [], the: {} } as T245);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g472 = <K extends keyof T472>(o: T472, k: K): U472<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U472<K>[K];
