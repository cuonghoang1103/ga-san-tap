import { f445, T445 } from './m445';
import { f424, T424 } from './m424';
import { f385, T385 } from './m385';
export interface T540 { id: number; ten: string; con: T540[]; the: Record<string, number> }
export type U540<K extends keyof T540> = { [P in K]: T540[P] extends number ? string : T540[P] };
export function f540(x: T540, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f540(c, 1);
  s += f445({ id: s, ten: 'a', con: [], the: {} } as T445);s += f424({ id: s, ten: 'a', con: [], the: {} } as T424);s += f385({ id: s, ten: 'a', con: [], the: {} } as T385);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g540 = <K extends keyof T540>(o: T540, k: K): U540<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U540<K>[K];
