import { f277, T277 } from './m277';
import { f29, T29 } from './m029';
import { f289, T289 } from './m289';
export interface T300 { id: number; ten: string; con: T300[]; the: Record<string, number> }
export type U300<K extends keyof T300> = { [P in K]: T300[P] extends number ? string : T300[P] };
export function f300(x: T300, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f300(c, 1);
  s += f277({ id: s, ten: 'a', con: [], the: {} } as T277);s += f29({ id: s, ten: 'a', con: [], the: {} } as T29);s += f289({ id: s, ten: 'a', con: [], the: {} } as T289);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g300 = <K extends keyof T300>(o: T300, k: K): U300<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U300<K>[K];
