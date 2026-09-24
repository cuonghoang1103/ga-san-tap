import { f61, T61 } from './m061';
import { f97, T97 } from './m097';
import { f110, T110 } from './m110';
export interface T196 { id: number; ten: string; con: T196[]; the: Record<string, number> }
export type U196<K extends keyof T196> = { [P in K]: T196[P] extends number ? string : T196[P] };
export function f196(x: T196, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f196(c, 1);
  s += f61({ id: s, ten: 'a', con: [], the: {} } as T61);s += f97({ id: s, ten: 'a', con: [], the: {} } as T97);s += f110({ id: s, ten: 'a', con: [], the: {} } as T110);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g196 = <K extends keyof T196>(o: T196, k: K): U196<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U196<K>[K];
