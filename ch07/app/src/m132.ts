import { f120, T120 } from './m120';
import { f91, T91 } from './m091';
import { f66, T66 } from './m066';
export interface T132 { id: number; ten: string; con: T132[]; the: Record<string, number> }
export type U132<K extends keyof T132> = { [P in K]: T132[P] extends number ? string : T132[P] };
export function f132(x: T132, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f132(c, 1);
  s += f120({ id: s, ten: 'a', con: [], the: {} } as T120);s += f91({ id: s, ten: 'a', con: [], the: {} } as T91);s += f66({ id: s, ten: 'a', con: [], the: {} } as T66);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g132 = <K extends keyof T132>(o: T132, k: K): U132<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U132<K>[K];
