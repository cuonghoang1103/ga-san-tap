import { f45, T45 } from './m045';
import { f38, T38 } from './m038';
import { f36, T36 } from './m036';
export interface T149 { id: number; ten: string; con: T149[]; the: Record<string, number> }
export type U149<K extends keyof T149> = { [P in K]: T149[P] extends number ? string : T149[P] };
export function f149(x: T149, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f149(c, 1);
  s += f45({ id: s, ten: 'a', con: [], the: {} } as T45);s += f38({ id: s, ten: 'a', con: [], the: {} } as T38);s += f36({ id: s, ten: 'a', con: [], the: {} } as T36);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g149 = <K extends keyof T149>(o: T149, k: K): U149<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U149<K>[K];
