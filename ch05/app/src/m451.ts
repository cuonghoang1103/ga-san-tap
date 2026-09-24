import { f153, T153 } from './m153';
import { f389, T389 } from './m389';
import { f431, T431 } from './m431';
export interface T451 { id: number; ten: string; con: T451[]; the: Record<string, number> }
export type U451<K extends keyof T451> = { [P in K]: T451[P] extends number ? string : T451[P] };
export function f451(x: T451, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f451(c, 1);
  s += f153({ id: s, ten: 'a', con: [], the: {} } as T153);s += f389({ id: s, ten: 'a', con: [], the: {} } as T389);s += f431({ id: s, ten: 'a', con: [], the: {} } as T431);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g451 = <K extends keyof T451>(o: T451, k: K): U451<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U451<K>[K];
