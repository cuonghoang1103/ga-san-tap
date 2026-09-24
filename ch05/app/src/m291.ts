import { f145, T145 } from './m145';
import { f236, T236 } from './m236';
import { f280, T280 } from './m280';
export interface T291 { id: number; ten: string; con: T291[]; the: Record<string, number> }
export type U291<K extends keyof T291> = { [P in K]: T291[P] extends number ? string : T291[P] };
export function f291(x: T291, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f291(c, 1);
  s += f145({ id: s, ten: 'a', con: [], the: {} } as T145);s += f236({ id: s, ten: 'a', con: [], the: {} } as T236);s += f280({ id: s, ten: 'a', con: [], the: {} } as T280);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g291 = <K extends keyof T291>(o: T291, k: K): U291<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U291<K>[K];
