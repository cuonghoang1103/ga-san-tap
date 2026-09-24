import { f420, T420 } from './m420';
import { f315, T315 } from './m315';
import { f112, T112 } from './m112';
export interface T484 { id: number; ten: string; con: T484[]; the: Record<string, number> }
export type U484<K extends keyof T484> = { [P in K]: T484[P] extends number ? string : T484[P] };
export function f484(x: T484, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f484(c, 1);
  s += f420({ id: s, ten: 'a', con: [], the: {} } as T420);s += f315({ id: s, ten: 'a', con: [], the: {} } as T315);s += f112({ id: s, ten: 'a', con: [], the: {} } as T112);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g484 = <K extends keyof T484>(o: T484, k: K): U484<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U484<K>[K];
