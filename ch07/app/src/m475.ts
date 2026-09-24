import { f131, T131 } from './m131';
import { f115, T115 } from './m115';
import { f45, T45 } from './m045';
export interface T475 { id: number; ten: string; con: T475[]; the: Record<string, number> }
export type U475<K extends keyof T475> = { [P in K]: T475[P] extends number ? string : T475[P] };
export function f475(x: T475, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f475(c, 1);
  s += f131({ id: s, ten: 'a', con: [], the: {} } as T131);s += f115({ id: s, ten: 'a', con: [], the: {} } as T115);s += f45({ id: s, ten: 'a', con: [], the: {} } as T45);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g475 = <K extends keyof T475>(o: T475, k: K): U475<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U475<K>[K];
