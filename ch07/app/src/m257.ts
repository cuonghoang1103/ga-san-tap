import { f210, T210 } from './m210';
import { f155, T155 } from './m155';
import { f77, T77 } from './m077';
export interface T257 { id: number; ten: string; con: T257[]; the: Record<string, number> }
export type U257<K extends keyof T257> = { [P in K]: T257[P] extends number ? string : T257[P] };
export function f257(x: T257, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f257(c, 1);
  s += f210({ id: s, ten: 'a', con: [], the: {} } as T210);s += f155({ id: s, ten: 'a', con: [], the: {} } as T155);s += f77({ id: s, ten: 'a', con: [], the: {} } as T77);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g257 = <K extends keyof T257>(o: T257, k: K): U257<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U257<K>[K];
