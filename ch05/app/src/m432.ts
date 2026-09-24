import { f406, T406 } from './m406';
import { f360, T360 } from './m360';
import { f24, T24 } from './m024';
export interface T432 { id: number; ten: string; con: T432[]; the: Record<string, number> }
export type U432<K extends keyof T432> = { [P in K]: T432[P] extends number ? string : T432[P] };
export function f432(x: T432, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f432(c, 1);
  s += f406({ id: s, ten: 'a', con: [], the: {} } as T406);s += f360({ id: s, ten: 'a', con: [], the: {} } as T360);s += f24({ id: s, ten: 'a', con: [], the: {} } as T24);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g432 = <K extends keyof T432>(o: T432, k: K): U432<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U432<K>[K];
