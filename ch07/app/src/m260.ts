import { f138, T138 } from './m138';
import { f50, T50 } from './m050';
import { f216, T216 } from './m216';
export interface T260 { id: number; ten: string; con: T260[]; the: Record<string, number> }
export type U260<K extends keyof T260> = { [P in K]: T260[P] extends number ? string : T260[P] };
export function f260(x: T260, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f260(c, 1);
  s += f138({ id: s, ten: 'a', con: [], the: {} } as T138);s += f50({ id: s, ten: 'a', con: [], the: {} } as T50);s += f216({ id: s, ten: 'a', con: [], the: {} } as T216);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g260 = <K extends keyof T260>(o: T260, k: K): U260<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U260<K>[K];
