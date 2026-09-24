import { f227, T227 } from './m227';
import { f75, T75 } from './m075';
import { f134, T134 } from './m134';
export interface T276 { id: number; ten: string; con: T276[]; the: Record<string, number> }
export type U276<K extends keyof T276> = { [P in K]: T276[P] extends number ? string : T276[P] };
export function f276(x: T276, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f276(c, 1);
  s += f227({ id: s, ten: 'a', con: [], the: {} } as T227);s += f75({ id: s, ten: 'a', con: [], the: {} } as T75);s += f134({ id: s, ten: 'a', con: [], the: {} } as T134);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g276 = <K extends keyof T276>(o: T276, k: K): U276<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U276<K>[K];
