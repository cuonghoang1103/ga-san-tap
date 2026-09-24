import { f70, T70 } from './m070';
import { f225, T225 } from './m225';
import { f184, T184 } from './m184';
export interface T278 { id: number; ten: string; con: T278[]; the: Record<string, number> }
export type U278<K extends keyof T278> = { [P in K]: T278[P] extends number ? string : T278[P] };
export function f278(x: T278, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f278(c, 1);
  s += f70({ id: s, ten: 'a', con: [], the: {} } as T70);s += f225({ id: s, ten: 'a', con: [], the: {} } as T225);s += f184({ id: s, ten: 'a', con: [], the: {} } as T184);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g278 = <K extends keyof T278>(o: T278, k: K): U278<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U278<K>[K];
