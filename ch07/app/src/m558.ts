import { f159, T159 } from './m159';
import { f157, T157 } from './m157';
import { f537, T537 } from './m537';
export interface T558 { id: number; ten: string; con: T558[]; the: Record<string, number> }
export type U558<K extends keyof T558> = { [P in K]: T558[P] extends number ? string : T558[P] };
export function f558(x: T558, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f558(c, 1);
  s += f159({ id: s, ten: 'a', con: [], the: {} } as T159);s += f157({ id: s, ten: 'a', con: [], the: {} } as T157);s += f537({ id: s, ten: 'a', con: [], the: {} } as T537);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g558 = <K extends keyof T558>(o: T558, k: K): U558<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U558<K>[K];
