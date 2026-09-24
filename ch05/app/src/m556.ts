import { f76, T76 } from './m076';
import { f187, T187 } from './m187';
import { f469, T469 } from './m469';
export interface T556 { id: number; ten: string; con: T556[]; the: Record<string, number> }
export type U556<K extends keyof T556> = { [P in K]: T556[P] extends number ? string : T556[P] };
export function f556(x: T556, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f556(c, 1);
  s += f76({ id: s, ten: 'a', con: [], the: {} } as T76);s += f187({ id: s, ten: 'a', con: [], the: {} } as T187);s += f469({ id: s, ten: 'a', con: [], the: {} } as T469);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g556 = <K extends keyof T556>(o: T556, k: K): U556<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U556<K>[K];
