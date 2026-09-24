import { f28, T28 } from './m028';
import { f66, T66 } from './m066';
import { f57, T57 } from './m057';
export interface T68 { id: number; ten: string; con: T68[]; the: Record<string, number> }
export type U68<K extends keyof T68> = { [P in K]: T68[P] extends number ? string : T68[P] };
export function f68(x: T68, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f68(c, 1);
  s += f28({ id: s, ten: 'a', con: [], the: {} } as T28);s += f66({ id: s, ten: 'a', con: [], the: {} } as T66);s += f57({ id: s, ten: 'a', con: [], the: {} } as T57);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g68 = <K extends keyof T68>(o: T68, k: K): U68<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U68<K>[K];
