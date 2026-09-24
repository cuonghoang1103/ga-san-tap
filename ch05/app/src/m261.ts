import { f35, T35 } from './m035';
import { f181, T181 } from './m181';
import { f34, T34 } from './m034';
export interface T261 { id: number; ten: string; con: T261[]; the: Record<string, number> }
export type U261<K extends keyof T261> = { [P in K]: T261[P] extends number ? string : T261[P] };
export function f261(x: T261, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f261(c, 1);
  s += f35({ id: s, ten: 'a', con: [], the: {} } as T35);s += f181({ id: s, ten: 'a', con: [], the: {} } as T181);s += f34({ id: s, ten: 'a', con: [], the: {} } as T34);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g261 = <K extends keyof T261>(o: T261, k: K): U261<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U261<K>[K];
