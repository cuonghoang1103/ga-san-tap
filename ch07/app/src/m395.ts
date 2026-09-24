import { f71, T71 } from './m071';
import { f281, T281 } from './m281';
import { f83, T83 } from './m083';
export interface T395 { id: number; ten: string; con: T395[]; the: Record<string, number> }
export type U395<K extends keyof T395> = { [P in K]: T395[P] extends number ? string : T395[P] };
export function f395(x: T395, n = 0): number {
  let s = n + x.id + x.ten.length;
  for (const c of x.con) s += f395(c, 1);
  s += f71({ id: s, ten: 'a', con: [], the: {} } as T71);s += f281({ id: s, ten: 'a', con: [], the: {} } as T281);s += f83({ id: s, ten: 'a', con: [], the: {} } as T83);
  return Object.values(x.the).reduce((a, b) => a + b, s);
}
export const g395 = <K extends keyof T395>(o: T395, k: K): U395<K>[K] => (typeof o[k] === 'number' ? String(o[k]) : o[k]) as U395<K>[K];
