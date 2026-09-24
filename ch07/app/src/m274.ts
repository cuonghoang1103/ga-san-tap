import { f221, T221 } from './m221';
import { f127, T127 } from './m127';
import { f137, T137 } from './m137';
export interface T274 { id: number; ten: string; con: T274[]; the: Record<string, number> }
export type U274<K extends keyof T274> = { [P in K]: T274[P] extends number ? string : T274[P] };
export function f274(x: T274, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f274(c, 1);
  s += f221({ id: s, ten: 'a', con: [], the: {} } as T221);s += f127({ id: s, ten: 'a', con: [], the: {} } as T127);s += f137({ id: s, ten: 'a', con: [], the: {} } as T137);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g274 = <K extends keyof T274>(o: T274, k: K): U274<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U274<K>[K];
