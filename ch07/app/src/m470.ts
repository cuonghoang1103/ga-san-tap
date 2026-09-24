import { f330, T330 } from './m330';
import { f389, T389 } from './m389';
import { f415, T415 } from './m415';
export interface T470 { id: number; ten: string; con: T470[]; the: Record<string, number> }
export type U470<K extends keyof T470> = { [P in K]: T470[P] extends number ? string : T470[P] };
export function f470(x: T470, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f470(c, 1);
  s += f330({ id: s, ten: 'a', con: [], the: {} } as T330);s += f389({ id: s, ten: 'a', con: [], the: {} } as T389);s += f415({ id: s, ten: 'a', con: [], the: {} } as T415);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g470 = <K extends keyof T470>(o: T470, k: K): U470<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U470<K>[K];
