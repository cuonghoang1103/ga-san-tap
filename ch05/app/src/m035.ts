import { f34, T34 } from './m034';
import { f14, T14 } from './m014';
import { f25, T25 } from './m025';
export interface T35 { id: number; ten: string; con: T35[]; the: Record<string, number> }
export type U35<K extends keyof T35> = { [P in K]: T35[P] extends number ? string : T35[P] };
export function f35(x: T35, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f35(c, 1);
  s += f34({ id: s, ten: 'a', con: [], the: {} } as T34);s += f14({ id: s, ten: 'a', con: [], the: {} } as T14);s += f25({ id: s, ten: 'a', con: [], the: {} } as T25);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g35 = <K extends keyof T35>(o: T35, k: K): U35<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U35<K>[K];
