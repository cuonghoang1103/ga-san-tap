import { f263, T263 } from './m263';
import { f454, T454 } from './m454';
import { f164, T164 } from './m164';
export interface T503 { id: number; ten: string; con: T503[]; the: Record<string, number> }
export type U503<K extends keyof T503> = { [P in K]: T503[P] extends number ? string : T503[P] };
export function f503(x: T503, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f503(c, 1);
  s += f263({ id: s, ten: 'a', con: [], the: {} } as T263);s += f454({ id: s, ten: 'a', con: [], the: {} } as T454);s += f164({ id: s, ten: 'a', con: [], the: {} } as T164);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g503 = <K extends keyof T503>(o: T503, k: K): U503<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U503<K>[K];
