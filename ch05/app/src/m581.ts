import { f155, T155 } from './m155';
import { f265, T265 } from './m265';
import { f580, T580 } from './m580';
export interface T581 { id: number; ten: string; con: T581[]; the: Record<string, number> }
export type U581<K extends keyof T581> = { [P in K]: T581[P] extends number ? string : T581[P] };
export function f581(x: T581, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f581(c, 1);
  s += f155({ id: s, ten: 'a', con: [], the: {} } as T155);s += f265({ id: s, ten: 'a', con: [], the: {} } as T265);s += f580({ id: s, ten: 'a', con: [], the: {} } as T580);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g581 = <K extends keyof T581>(o: T581, k: K): U581<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U581<K>[K];
