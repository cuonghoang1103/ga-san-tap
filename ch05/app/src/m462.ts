import { f109, T109 } from './m109';
import { f255, T255 } from './m255';
import { f188, T188 } from './m188';
export interface T462 { id: number; ten: string; con: T462[]; the: Record<string, number> }
export type U462<K extends keyof T462> = { [P in K]: T462[P] extends number ? string : T462[P] };
export function f462(x: T462, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f462(c, 1);
  s += f109({ id: s, ten: 'a', con: [], the: {} } as T109);s += f255({ id: s, ten: 'a', con: [], the: {} } as T255);s += f188({ id: s, ten: 'a', con: [], the: {} } as T188);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g462 = <K extends keyof T462>(o: T462, k: K): U462<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U462<K>[K];
