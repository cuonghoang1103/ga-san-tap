import { f270, T270 } from './m270';
import { f353, T353 } from './m353';
import { f69, T69 } from './m069';
export interface T469 { id: number; ten: string; con: T469[]; the: Record<string, number> }
export type U469<K extends keyof T469> = { [P in K]: T469[P] extends number ? string : T469[P] };
export function f469(x: T469, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f469(c, 1);
  s += f270({ id: s, ten: 'a', con: [], the: {} } as T270);s += f353({ id: s, ten: 'a', con: [], the: {} } as T353);s += f69({ id: s, ten: 'a', con: [], the: {} } as T69);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g469 = <K extends keyof T469>(o: T469, k: K): U469<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U469<K>[K];
