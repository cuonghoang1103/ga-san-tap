import { f115, T115 } from './m115';
import { f288, T288 } from './m288';
import { f102, T102 } from './m102';
export interface T479 { id: number; ten: string; con: T479[]; the: Record<string, number> }
export type U479<K extends keyof T479> = { [P in K]: T479[P] extends number ? string : T479[P] };
export function f479(x: T479, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f479(c, 1);
  s += f115({ id: s, ten: 'a', con: [], the: {} } as T115);s += f288({ id: s, ten: 'a', con: [], the: {} } as T288);s += f102({ id: s, ten: 'a', con: [], the: {} } as T102);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g479 = <K extends keyof T479>(o: T479, k: K): U479<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U479<K>[K];
