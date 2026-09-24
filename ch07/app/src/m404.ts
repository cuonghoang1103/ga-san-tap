import { f325, T325 } from './m325';
import { f383, T383 } from './m383';
import { f246, T246 } from './m246';
export interface T404 { id: number; ten: string; con: T404[]; the: Record<string, number> }
export type U404<K extends keyof T404> = { [P in K]: T404[P] extends number ? string : T404[P] };
export function f404(x: T404, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f404(c, 1);
  s += f325({ id: s, ten: 'a', con: [], the: {} } as T325);s += f383({ id: s, ten: 'a', con: [], the: {} } as T383);s += f246({ id: s, ten: 'a', con: [], the: {} } as T246);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g404 = <K extends keyof T404>(o: T404, k: K): U404<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U404<K>[K];
