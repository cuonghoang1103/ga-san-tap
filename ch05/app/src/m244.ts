import { f103, T103 } from './m103';
import { f86, T86 } from './m086';
import { f220, T220 } from './m220';
export interface T244 { id: number; ten: string; con: T244[]; the: Record<string, number> }
export type U244<K extends keyof T244> = { [P in K]: T244[P] extends number ? string : T244[P] };
export function f244(x: T244, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f244(c, 1);
  s += f103({ id: s, ten: 'a', con: [], the: {} } as T103);s += f86({ id: s, ten: 'a', con: [], the: {} } as T86);s += f220({ id: s, ten: 'a', con: [], the: {} } as T220);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g244 = <K extends keyof T244>(o: T244, k: K): U244<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U244<K>[K];
