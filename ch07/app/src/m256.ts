import { f5, T5 } from './m005';
import { f178, T178 } from './m178';
import { f135, T135 } from './m135';
export interface T256 { id: number; ten: string; con: T256[]; the: Record<string, number> }
export type U256<K extends keyof T256> = { [P in K]: T256[P] extends number ? string : T256[P] };
export function f256(x: T256, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f256(c, 1);
  s += f5({ id: s, ten: 'a', con: [], the: {} } as T5);s += f178({ id: s, ten: 'a', con: [], the: {} } as T178);s += f135({ id: s, ten: 'a', con: [], the: {} } as T135);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g256 = <K extends keyof T256>(o: T256, k: K): U256<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U256<K>[K];
