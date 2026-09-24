import { f188, T188 } from './m188';
import { f21, T21 } from './m021';
import { f35, T35 } from './m035';
export interface T193 { id: number; ten: string; con: T193[]; the: Record<string, number> }
export type U193<K extends keyof T193> = { [P in K]: T193[P] extends number ? string : T193[P] };
export function f193(x: T193, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f193(c, 1);
  s += f188({ id: s, ten: 'a', con: [], the: {} } as T188);s += f21({ id: s, ten: 'a', con: [], the: {} } as T21);s += f35({ id: s, ten: 'a', con: [], the: {} } as T35);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g193 = <K extends keyof T193>(o: T193, k: K): U193<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U193<K>[K];
