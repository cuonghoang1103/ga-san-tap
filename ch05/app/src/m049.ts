import { f5, T5 } from './m005';
import { f35, T35 } from './m035';
import { f16, T16 } from './m016';
export interface T49 { id: number; ten: string; con: T49[]; the: Record<string, number> }
export type U49<K extends keyof T49> = { [P in K]: T49[P] extends number ? string : T49[P] };
export function f49(x: T49, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f49(c, 1);
  s += f5({ id: s, ten: 'a', con: [], the: {} } as T5);s += f35({ id: s, ten: 'a', con: [], the: {} } as T35);s += f16({ id: s, ten: 'a', con: [], the: {} } as T16);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g49 = <K extends keyof T49>(o: T49, k: K): U49<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U49<K>[K];
