import { f41, T41 } from './m041';
import { f45, T45 } from './m045';
import { f18, T18 } from './m018';
export interface T58 { id: number; ten: string; con: T58[]; the: Record<string, number> }
export type U58<K extends keyof T58> = { [P in K]: T58[P] extends number ? string : T58[P] };
export function f58(x: T58, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f58(c, 1);
  s += f41({ id: s, ten: 'a', con: [], the: {} } as T41);s += f45({ id: s, ten: 'a', con: [], the: {} } as T45);s += f18({ id: s, ten: 'a', con: [], the: {} } as T18);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g58 = <K extends keyof T58>(o: T58, k: K): U58<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U58<K>[K];
