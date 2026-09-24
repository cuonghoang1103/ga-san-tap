import { f279, T279 } from './m279';
import { f348, T348 } from './m348';
import { f136, T136 } from './m136';
export interface T365 { id: number; ten: string; con: T365[]; the: Record<string, number> }
export type U365<K extends keyof T365> = { [P in K]: T365[P] extends number ? string : T365[P] };
export function f365(x: T365, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f365(c, 1);
  s += f279({ id: s, ten: 'a', con: [], the: {} } as T279);s += f348({ id: s, ten: 'a', con: [], the: {} } as T348);s += f136({ id: s, ten: 'a', con: [], the: {} } as T136);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g365 = <K extends keyof T365>(o: T365, k: K): U365<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U365<K>[K];
