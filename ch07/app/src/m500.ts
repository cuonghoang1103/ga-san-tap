import { f368, T368 } from './m368';
import { f326, T326 } from './m326';
import { f353, T353 } from './m353';
export interface T500 { id: number; ten: string; con: T500[]; the: Record<string, number> }
export type U500<K extends keyof T500> = { [P in K]: T500[P] extends number ? string : T500[P] };
export function f500(x: T500, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f500(c, 1);
  s += f368({ id: s, ten: 'a', con: [], the: {} } as T368);s += f326({ id: s, ten: 'a', con: [], the: {} } as T326);s += f353({ id: s, ten: 'a', con: [], the: {} } as T353);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g500 = <K extends keyof T500>(o: T500, k: K): U500<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U500<K>[K];
