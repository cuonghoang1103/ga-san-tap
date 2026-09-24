import { f292, T292 } from './m292';
import { f282, T282 } from './m282';
import { f144, T144 } from './m144';
export interface T389 { id: number; ten: string; con: T389[]; the: Record<string, number> }
export type U389<K extends keyof T389> = { [P in K]: T389[P] extends number ? string : T389[P] };
export function f389(x: T389, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f389(c, 1);
  s += f292({ id: s, ten: 'a', con: [], the: {} } as T292);s += f282({ id: s, ten: 'a', con: [], the: {} } as T282);s += f144({ id: s, ten: 'a', con: [], the: {} } as T144);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g389 = <K extends keyof T389>(o: T389, k: K): U389<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U389<K>[K];
