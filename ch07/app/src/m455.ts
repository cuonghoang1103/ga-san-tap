import { f66, T66 } from './m066';
import { f131, T131 } from './m131';
import { f99, T99 } from './m099';
export interface T455 { id: number; ten: string; con: T455[]; the: Record<string, number> }
export type U455<K extends keyof T455> = { [P in K]: T455[P] extends number ? string : T455[P] };
export function f455(x: T455, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f455(c, 1);
  s += f66({ id: s, ten: 'a', con: [], the: {} } as T66);s += f131({ id: s, ten: 'a', con: [], the: {} } as T131);s += f99({ id: s, ten: 'a', con: [], the: {} } as T99);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g455 = <K extends keyof T455>(o: T455, k: K): U455<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U455<K>[K];
