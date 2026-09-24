import { f314, T314 } from './m314';
import { f359, T359 } from './m359';
import { f103, T103 } from './m103';
export interface T440 { id: number; ten: string; con: T440[]; the: Record<string, number> }
export type U440<K extends keyof T440> = { [P in K]: T440[P] extends number ? string : T440[P] };
export function f440(x: T440, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f440(c, 1);
  s += f314({ id: s, ten: 'a', con: [], the: {} } as T314);s += f359({ id: s, ten: 'a', con: [], the: {} } as T359);s += f103({ id: s, ten: 'a', con: [], the: {} } as T103);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g440 = <K extends keyof T440>(o: T440, k: K): U440<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U440<K>[K];
