import { f85, T85 } from './m085';
import { f25, T25 } from './m025';
import { f139, T139 } from './m139';
export interface T140 { id: number; ten: string; con: T140[]; the: Record<string, number> }
export type U140<K extends keyof T140> = { [P in K]: T140[P] extends number ? string : T140[P] };
export function f140(x: T140, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f140(c, 1);
  s += f85({ id: s, ten: 'a', con: [], the: {} } as T85);s += f25({ id: s, ten: 'a', con: [], the: {} } as T25);s += f139({ id: s, ten: 'a', con: [], the: {} } as T139);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g140 = <K extends keyof T140>(o: T140, k: K): U140<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U140<K>[K];
