import { f456, T456 } from './m456';
import { f135, T135 } from './m135';
import { f159, T159 } from './m159';
export interface T521 { id: number; ten: string; con: T521[]; the: Record<string, number> }
export type U521<K extends keyof T521> = { [P in K]: T521[P] extends number ? string : T521[P] };
export function f521(x: T521, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f521(c, 1);
  s += f456({ id: s, ten: 'a', con: [], the: {} } as T456);s += f135({ id: s, ten: 'a', con: [], the: {} } as T135);s += f159({ id: s, ten: 'a', con: [], the: {} } as T159);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g521 = <K extends keyof T521>(o: T521, k: K): U521<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U521<K>[K];
