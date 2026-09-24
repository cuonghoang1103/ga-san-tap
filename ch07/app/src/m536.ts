import { f251, T251 } from './m251';
import { f245, T245 } from './m245';
import { f108, T108 } from './m108';
export interface T536 { id: number; ten: string; con: T536[]; the: Record<string, number> }
export type U536<K extends keyof T536> = { [P in K]: T536[P] extends number ? string : T536[P] };
export function f536(x: T536, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f536(c, 1);
  s += f251({ id: s, ten: 'a', con: [], the: {} } as T251);s += f245({ id: s, ten: 'a', con: [], the: {} } as T245);s += f108({ id: s, ten: 'a', con: [], the: {} } as T108);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g536 = <K extends keyof T536>(o: T536, k: K): U536<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U536<K>[K];
