import { f43, T43 } from './m043';
import { f154, T154 } from './m154';
import { f17, T17 } from './m017';
export interface T328 { id: number; ten: string; con: T328[]; the: Record<string, number> }
export type U328<K extends keyof T328> = { [P in K]: T328[P] extends number ? string : T328[P] };
export function f328(x: T328, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f328(c, 1);
  s += f43({ id: s, ten: 'a', con: [], the: {} } as T43);s += f154({ id: s, ten: 'a', con: [], the: {} } as T154);s += f17({ id: s, ten: 'a', con: [], the: {} } as T17);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g328 = <K extends keyof T328>(o: T328, k: K): U328<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U328<K>[K];
