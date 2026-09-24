import { f396, T396 } from './m396';
import { f50, T50 } from './m050';
import { f204, T204 } from './m204';
export interface T421 { id: number; ten: string; con: T421[]; the: Record<string, number> }
export type U421<K extends keyof T421> = { [P in K]: T421[P] extends number ? string : T421[P] };
export function f421(x: T421, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f421(c, 1);
  s += f396({ id: s, ten: 'a', con: [], the: {} } as T396);s += f50({ id: s, ten: 'a', con: [], the: {} } as T50);s += f204({ id: s, ten: 'a', con: [], the: {} } as T204);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g421 = <K extends keyof T421>(o: T421, k: K): U421<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U421<K>[K];
