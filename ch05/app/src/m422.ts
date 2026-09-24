import { f332, T332 } from './m332';
import { f370, T370 } from './m370';
import { f95, T95 } from './m095';
export interface T422 { id: number; ten: string; con: T422[]; the: Record<string, number> }
export type U422<K extends keyof T422> = { [P in K]: T422[P] extends number ? string : T422[P] };
export function f422(x: T422, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f422(c, 1);
  s += f332({ id: s, ten: 'a', con: [], the: {} } as T332);s += f370({ id: s, ten: 'a', con: [], the: {} } as T370);s += f95({ id: s, ten: 'a', con: [], the: {} } as T95);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g422 = <K extends keyof T422>(o: T422, k: K): U422<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U422<K>[K];
