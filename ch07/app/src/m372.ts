import { f188, T188 } from './m188';
import { f249, T249 } from './m249';
import { f363, T363 } from './m363';
export interface T372 { id: number; ten: string; con: T372[]; the: Record<string, number> }
export type U372<K extends keyof T372> = { [P in K]: T372[P] extends number ? string : T372[P] };
export function f372(x: T372, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f372(c, 1);
  s += f188({ id: s, ten: 'a', con: [], the: {} } as T188);s += f249({ id: s, ten: 'a', con: [], the: {} } as T249);s += f363({ id: s, ten: 'a', con: [], the: {} } as T363);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g372 = <K extends keyof T372>(o: T372, k: K): U372<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U372<K>[K];
