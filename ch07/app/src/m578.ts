import { f427, T427 } from './m427';
import { f567, T567 } from './m567';
import { f171, T171 } from './m171';
export interface T578 { id: number; ten: string; con: T578[]; the: Record<string, number> }
export type U578<K extends keyof T578> = { [P in K]: T578[P] extends number ? string : T578[P] };
export function f578(x: T578, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f578(c, 1);
  s += f427({ id: s, ten: 'a', con: [], the: {} } as T427);s += f567({ id: s, ten: 'a', con: [], the: {} } as T567);s += f171({ id: s, ten: 'a', con: [], the: {} } as T171);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g578 = <K extends keyof T578>(o: T578, k: K): U578<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U578<K>[K];
