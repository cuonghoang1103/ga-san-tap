import { f23, T23 } from './m023';
import { f7, T7 } from './m007';
import { f2, T2 } from './m002';
export interface T295 { id: number; ten: string; con: T295[]; the: Record<string, number> }
export type U295<K extends keyof T295> = { [P in K]: T295[P] extends number ? string : T295[P] };
export function f295(x: T295, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f295(c, 1);
  s += f23({ id: s, ten: 'a', con: [], the: {} } as T23);s += f7({ id: s, ten: 'a', con: [], the: {} } as T7);s += f2({ id: s, ten: 'a', con: [], the: {} } as T2);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g295 = <K extends keyof T295>(o: T295, k: K): U295<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U295<K>[K];
