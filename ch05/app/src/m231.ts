import { f28, T28 } from './m028';
import { f165, T165 } from './m165';
import { f96, T96 } from './m096';
export interface T231 { id: number; ten: string; con: T231[]; the: Record<string, number> }
export type U231<K extends keyof T231> = { [P in K]: T231[P] extends number ? string : T231[P] };
export function f231(x: T231, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f231(c, 1);
  s += f28({ id: s, ten: 'a', con: [], the: {} } as T28);s += f165({ id: s, ten: 'a', con: [], the: {} } as T165);s += f96({ id: s, ten: 'a', con: [], the: {} } as T96);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g231 = <K extends keyof T231>(o: T231, k: K): U231<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U231<K>[K];
