import { f15, T15 } from './m015';
import { f149, T149 } from './m149';
import { f80, T80 } from './m080';
export interface T339 { id: number; ten: string; con: T339[]; the: Record<string, number> }
export type U339<K extends keyof T339> = { [P in K]: T339[P] extends number ? string : T339[P] };
export function f339(x: T339, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f339(c, 1);
  s += f15({ id: s, ten: 'a', con: [], the: {} } as T15);s += f149({ id: s, ten: 'a', con: [], the: {} } as T149);s += f80({ id: s, ten: 'a', con: [], the: {} } as T80);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g339 = <K extends keyof T339>(o: T339, k: K): U339<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U339<K>[K];
