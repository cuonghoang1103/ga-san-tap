import { f224, T224 } from './m224';
import { f309, T309 } from './m309';
import { f136, T136 } from './m136';
export interface T513 { id: number; ten: string; con: T513[]; the: Record<string, number> }
export type U513<K extends keyof T513> = { [P in K]: T513[P] extends number ? string : T513[P] };
export function f513(x: T513, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f513(c, 1);
  s += f224({ id: s, ten: 'a', con: [], the: {} } as T224);s += f309({ id: s, ten: 'a', con: [], the: {} } as T309);s += f136({ id: s, ten: 'a', con: [], the: {} } as T136);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g513 = <K extends keyof T513>(o: T513, k: K): U513<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U513<K>[K];
