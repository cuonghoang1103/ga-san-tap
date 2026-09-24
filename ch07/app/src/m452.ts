import { f51, T51 } from './m051';
import { f117, T117 } from './m117';
import { f260, T260 } from './m260';
export interface T452 { id: number; ten: string; con: T452[]; the: Record<string, number> }
export type U452<K extends keyof T452> = { [P in K]: T452[P] extends number ? string : T452[P] };
export function f452(x: T452, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f452(c, 1);
  s += f51({ id: s, ten: 'a', con: [], the: {} } as T51);s += f117({ id: s, ten: 'a', con: [], the: {} } as T117);s += f260({ id: s, ten: 'a', con: [], the: {} } as T260);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g452 = <K extends keyof T452>(o: T452, k: K): U452<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U452<K>[K];
