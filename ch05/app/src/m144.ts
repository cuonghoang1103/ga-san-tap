import { f18, T18 } from './m018';
import { f19, T19 } from './m019';
import { f5, T5 } from './m005';
export interface T144 { id: number; ten: string; con: T144[]; the: Record<string, number> }
export type U144<K extends keyof T144> = { [P in K]: T144[P] extends number ? string : T144[P] };
export function f144(x: T144, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f144(c, 1);
  s += f18({ id: s, ten: 'a', con: [], the: {} } as T18);s += f19({ id: s, ten: 'a', con: [], the: {} } as T19);s += f5({ id: s, ten: 'a', con: [], the: {} } as T5);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g144 = <K extends keyof T144>(o: T144, k: K): U144<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U144<K>[K];
