import { f183, T183 } from './m183';
import { f163, T163 } from './m163';
import { f89, T89 } from './m089';
export interface T188 { id: number; ten: string; con: T188[]; the: Record<string, number> }
export type U188<K extends keyof T188> = { [P in K]: T188[P] extends number ? string : T188[P] };
export function f188(x: T188, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f188(c, 1);
  s += f183({ id: s, ten: 'a', con: [], the: {} } as T183);s += f163({ id: s, ten: 'a', con: [], the: {} } as T163);s += f89({ id: s, ten: 'a', con: [], the: {} } as T89);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g188 = <K extends keyof T188>(o: T188, k: K): U188<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U188<K>[K];
