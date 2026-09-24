import { f452, T452 } from './m452';
import { f157, T157 } from './m157';
import { f216, T216 } from './m216';
export interface T481 { id: number; ten: string; con: T481[]; the: Record<string, number> }
export type U481<K extends keyof T481> = { [P in K]: T481[P] extends number ? string : T481[P] };
export function f481(x: T481, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f481(c, 1);
  s += f452({ id: s, ten: 'a', con: [], the: {} } as T452);s += f157({ id: s, ten: 'a', con: [], the: {} } as T157);s += f216({ id: s, ten: 'a', con: [], the: {} } as T216);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g481 = <K extends keyof T481>(o: T481, k: K): U481<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U481<K>[K];
