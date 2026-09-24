import { f153, T153 } from './m153';
import { f12, T12 } from './m012';
import { f385, T385 } from './m385';
export interface T554 { id: number; ten: string; con: T554[]; the: Record<string, number> }
export type U554<K extends keyof T554> = { [P in K]: T554[P] extends number ? string : T554[P] };
export function f554(x: T554, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f554(c, 1);
  s += f153({ id: s, ten: 'a', con: [], the: {} } as T153);s += f12({ id: s, ten: 'a', con: [], the: {} } as T12);s += f385({ id: s, ten: 'a', con: [], the: {} } as T385);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g554 = <K extends keyof T554>(o: T554, k: K): U554<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U554<K>[K];
