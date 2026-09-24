import { f299, T299 } from './m299';
import { f163, T163 } from './m163';
import { f159, T159 } from './m159';
export interface T524 { id: number; ten: string; con: T524[]; the: Record<string, number> }
export type U524<K extends keyof T524> = { [P in K]: T524[P] extends number ? string : T524[P] };
export function f524(x: T524, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f524(c, 1);
  s += f299({ id: s, ten: 'a', con: [], the: {} } as T299);s += f163({ id: s, ten: 'a', con: [], the: {} } as T163);s += f159({ id: s, ten: 'a', con: [], the: {} } as T159);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g524 = <K extends keyof T524>(o: T524, k: K): U524<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U524<K>[K];
