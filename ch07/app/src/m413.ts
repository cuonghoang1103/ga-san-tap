import { f353, T353 } from './m353';
import { f140, T140 } from './m140';
import { f221, T221 } from './m221';
export interface T413 { id: number; ten: string; con: T413[]; the: Record<string, number> }
export type U413<K extends keyof T413> = { [P in K]: T413[P] extends number ? string : T413[P] };
export function f413(x: T413, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f413(c, 1);
  s += f353({ id: s, ten: 'a', con: [], the: {} } as T353);s += f140({ id: s, ten: 'a', con: [], the: {} } as T140);s += f221({ id: s, ten: 'a', con: [], the: {} } as T221);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g413 = <K extends keyof T413>(o: T413, k: K): U413<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U413<K>[K];
