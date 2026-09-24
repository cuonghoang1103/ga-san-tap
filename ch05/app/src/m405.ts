import { f393, T393 } from './m393';
import { f172, T172 } from './m172';
import { f198, T198 } from './m198';
export interface T405 { id: number; ten: string; con: T405[]; the: Record<string, number> }
export type U405<K extends keyof T405> = { [P in K]: T405[P] extends number ? string : T405[P] };
export function f405(x: T405, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f405(c, 1);
  s += f393({ id: s, ten: 'a', con: [], the: {} } as T393);s += f172({ id: s, ten: 'a', con: [], the: {} } as T172);s += f198({ id: s, ten: 'a', con: [], the: {} } as T198);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g405 = <K extends keyof T405>(o: T405, k: K): U405<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U405<K>[K];
