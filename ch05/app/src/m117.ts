import { f14, T14 } from './m014';
import { f57, T57 } from './m057';
import { f21, T21 } from './m021';
export interface T117 { id: number; ten: string; con: T117[]; the: Record<string, number> }
export type U117<K extends keyof T117> = { [P in K]: T117[P] extends number ? string : T117[P] };
export function f117(x: T117, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f117(c, 1);
  s += f14({ id: s, ten: 'a', con: [], the: {} } as T14);s += f57({ id: s, ten: 'a', con: [], the: {} } as T57);s += f21({ id: s, ten: 'a', con: [], the: {} } as T21);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g117 = <K extends keyof T117>(o: T117, k: K): U117<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U117<K>[K];
