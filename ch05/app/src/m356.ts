import { f125, T125 } from './m125';
import { f293, T293 } from './m293';
import { f173, T173 } from './m173';
export interface T356 { id: number; ten: string; con: T356[]; the: Record<string, number> }
export type U356<K extends keyof T356> = { [P in K]: T356[P] extends number ? string : T356[P] };
export function f356(x: T356, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f356(c, 1);
  s += f125({ id: s, ten: 'a', con: [], the: {} } as T125);s += f293({ id: s, ten: 'a', con: [], the: {} } as T293);s += f173({ id: s, ten: 'a', con: [], the: {} } as T173);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g356 = <K extends keyof T356>(o: T356, k: K): U356<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U356<K>[K];
