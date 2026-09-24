import { f231, T231 } from './m231';
import { f201, T201 } from './m201';
import { f72, T72 } from './m072';
export interface T588 { id: number; ten: string; con: T588[]; the: Record<string, number> }
export type U588<K extends keyof T588> = { [P in K]: T588[P] extends number ? string : T588[P] };
export function f588(x: T588, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f588(c, 1);
  s += f231({ id: s, ten: 'a', con: [], the: {} } as T231);s += f201({ id: s, ten: 'a', con: [], the: {} } as T201);s += f72({ id: s, ten: 'a', con: [], the: {} } as T72);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g588 = <K extends keyof T588>(o: T588, k: K): U588<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U588<K>[K];
