import { f114, T114 } from './m114';
import { f23, T23 } from './m023';
import { f86, T86 } from './m086';
export interface T136 { id: number; ten: string; con: T136[]; the: Record<string, number> }
export type U136<K extends keyof T136> = { [P in K]: T136[P] extends number ? string : T136[P] };
export function f136(x: T136, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f136(c, 1);
  s += f114({ id: s, ten: 'a', con: [], the: {} } as T114);s += f23({ id: s, ten: 'a', con: [], the: {} } as T23);s += f86({ id: s, ten: 'a', con: [], the: {} } as T86);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g136 = <K extends keyof T136>(o: T136, k: K): U136<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U136<K>[K];
