import { f550, T550 } from './m550';
import { f203, T203 } from './m203';
import { f556, T556 } from './m556';
export interface T589 { id: number; ten: string; con: T589[]; the: Record<string, number> }
export type U589<K extends keyof T589> = { [P in K]: T589[P] extends number ? string : T589[P] };
export function f589(x: T589, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f589(c, 1);
  s += f550({ id: s, ten: 'a', con: [], the: {} } as T550);s += f203({ id: s, ten: 'a', con: [], the: {} } as T203);s += f556({ id: s, ten: 'a', con: [], the: {} } as T556);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g589 = <K extends keyof T589>(o: T589, k: K): U589<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U589<K>[K];
