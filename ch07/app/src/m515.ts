import { f246, T246 } from './m246';
import { f220, T220 } from './m220';
import { f445, T445 } from './m445';
export interface T515 { id: number; ten: string; con: T515[]; the: Record<string, number> }
export type U515<K extends keyof T515> = { [P in K]: T515[P] extends number ? string : T515[P] };
export function f515(x: T515, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f515(c, 1);
  s += f246({ id: s, ten: 'a', con: [], the: {} } as T246);s += f220({ id: s, ten: 'a', con: [], the: {} } as T220);s += f445({ id: s, ten: 'a', con: [], the: {} } as T445);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g515 = <K extends keyof T515>(o: T515, k: K): U515<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U515<K>[K];
