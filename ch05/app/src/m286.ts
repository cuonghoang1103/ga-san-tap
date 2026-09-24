import { f226, T226 } from './m226';
import { f175, T175 } from './m175';
import { f140, T140 } from './m140';
export interface T286 { id: number; ten: string; con: T286[]; the: Record<string, number> }
export type U286<K extends keyof T286> = { [P in K]: T286[P] extends number ? string : T286[P] };
export function f286(x: T286, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f286(c, 1);
  s += f226({ id: s, ten: 'a', con: [], the: {} } as T226);s += f175({ id: s, ten: 'a', con: [], the: {} } as T175);s += f140({ id: s, ten: 'a', con: [], the: {} } as T140);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g286 = <K extends keyof T286>(o: T286, k: K): U286<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U286<K>[K];
