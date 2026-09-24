import { f131, T131 } from './m131';
import { f75, T75 } from './m075';
import { f32, T32 } from './m032';
export interface T151 { id: number; ten: string; con: T151[]; the: Record<string, number> }
export type U151<K extends keyof T151> = { [P in K]: T151[P] extends number ? string : T151[P] };
export function f151(x: T151, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f151(c, 1);
  s += f131({ id: s, ten: 'a', con: [], the: {} } as T131);s += f75({ id: s, ten: 'a', con: [], the: {} } as T75);s += f32({ id: s, ten: 'a', con: [], the: {} } as T32);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g151 = <K extends keyof T151>(o: T151, k: K): U151<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U151<K>[K];
