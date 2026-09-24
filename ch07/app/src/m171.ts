import { f112, T112 } from './m112';
import { f163, T163 } from './m163';
import { f57, T57 } from './m057';
export interface T171 { id: number; ten: string; con: T171[]; the: Record<string, number> }
export type U171<K extends keyof T171> = { [P in K]: T171[P] extends number ? string : T171[P] };
export function f171(x: T171, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f171(c, 1);
  s += f112({ id: s, ten: 'a', con: [], the: {} } as T112);s += f163({ id: s, ten: 'a', con: [], the: {} } as T163);s += f57({ id: s, ten: 'a', con: [], the: {} } as T57);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g171 = <K extends keyof T171>(o: T171, k: K): U171<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U171<K>[K];
