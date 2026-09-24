import { f179, T179 } from './m179';
import { f229, T229 } from './m229';
import { f191, T191 } from './m191';
export interface T246 { id: number; ten: string; con: T246[]; the: Record<string, number> }
export type U246<K extends keyof T246> = { [P in K]: T246[P] extends number ? string : T246[P] };
export function f246(x: T246, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f246(c, 1);
  s += f179({ id: s, ten: 'a', con: [], the: {} } as T179);s += f229({ id: s, ten: 'a', con: [], the: {} } as T229);s += f191({ id: s, ten: 'a', con: [], the: {} } as T191);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g246 = <K extends keyof T246>(o: T246, k: K): U246<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U246<K>[K];
