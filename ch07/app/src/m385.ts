import { f356, T356 } from './m356';
import { f353, T353 } from './m353';
import { f328, T328 } from './m328';
export interface T385 { id: number; ten: string; con: T385[]; the: Record<string, number> }
export type U385<K extends keyof T385> = { [P in K]: T385[P] extends number ? string : T385[P] };
export function f385(x: T385, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f385(c, 1);
  s += f356({ id: s, ten: 'a', con: [], the: {} } as T356);s += f353({ id: s, ten: 'a', con: [], the: {} } as T353);s += f328({ id: s, ten: 'a', con: [], the: {} } as T328);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g385 = <K extends keyof T385>(o: T385, k: K): U385<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U385<K>[K];
