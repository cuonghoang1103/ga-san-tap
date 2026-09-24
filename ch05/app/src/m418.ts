import { f105, T105 } from './m105';
import { f76, T76 } from './m076';
import { f117, T117 } from './m117';
export interface T418 { id: number; ten: string; con: T418[]; the: Record<string, number> }
export type U418<K extends keyof T418> = { [P in K]: T418[P] extends number ? string : T418[P] };
export function f418(x: T418, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f418(c, 1);
  s += f105({ id: s, ten: 'a', con: [], the: {} } as T105);s += f76({ id: s, ten: 'a', con: [], the: {} } as T76);s += f117({ id: s, ten: 'a', con: [], the: {} } as T117);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g418 = <K extends keyof T418>(o: T418, k: K): U418<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U418<K>[K];
