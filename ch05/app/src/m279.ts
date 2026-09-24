import { f158, T158 } from './m158';
import { f205, T205 } from './m205';
import { f123, T123 } from './m123';
export interface T279 { id: number; ten: string; con: T279[]; the: Record<string, number> }
export type U279<K extends keyof T279> = { [P in K]: T279[P] extends number ? string : T279[P] };
export function f279(x: T279, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f279(c, 1);
  s += f158({ id: s, ten: 'a', con: [], the: {} } as T158);s += f205({ id: s, ten: 'a', con: [], the: {} } as T205);s += f123({ id: s, ten: 'a', con: [], the: {} } as T123);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g279 = <K extends keyof T279>(o: T279, k: K): U279<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U279<K>[K];
