import { f204, T204 } from './m204';
import { f190, T190 } from './m190';
import { f478, T478 } from './m478';
export interface T499 { id: number; ten: string; con: T499[]; the: Record<string, number> }
export type U499<K extends keyof T499> = { [P in K]: T499[P] extends number ? string : T499[P] };
export function f499(x: T499, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f499(c, 1);
  s += f204({ id: s, ten: 'a', con: [], the: {} } as T204);s += f190({ id: s, ten: 'a', con: [], the: {} } as T190);s += f478({ id: s, ten: 'a', con: [], the: {} } as T478);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g499 = <K extends keyof T499>(o: T499, k: K): U499<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U499<K>[K];
