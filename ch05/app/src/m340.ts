import { f102, T102 } from './m102';
import { f189, T189 } from './m189';
import { f199, T199 } from './m199';
export interface T340 { id: number; ten: string; con: T340[]; the: Record<string, number> }
export type U340<K extends keyof T340> = { [P in K]: T340[P] extends number ? string : T340[P] };
export function f340(x: T340, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f340(c, 1);
  s += f102({ id: s, ten: 'a', con: [], the: {} } as T102);s += f189({ id: s, ten: 'a', con: [], the: {} } as T189);s += f199({ id: s, ten: 'a', con: [], the: {} } as T199);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g340 = <K extends keyof T340>(o: T340, k: K): U340<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U340<K>[K];
