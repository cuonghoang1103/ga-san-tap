import { f474, T474 } from './m474';
import { f445, T445 } from './m445';
import { f138, T138 } from './m138';
export interface T508 { id: number; ten: string; con: T508[]; the: Record<string, number> }
export type U508<K extends keyof T508> = { [P in K]: T508[P] extends number ? string : T508[P] };
export function f508(x: T508, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f508(c, 1);
  s += f474({ id: s, ten: 'a', con: [], the: {} } as T474);s += f445({ id: s, ten: 'a', con: [], the: {} } as T445);s += f138({ id: s, ten: 'a', con: [], the: {} } as T138);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g508 = <K extends keyof T508>(o: T508, k: K): U508<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U508<K>[K];
